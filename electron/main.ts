import { app, BrowserWindow } from 'electron';
import { join } from 'path';

let mainWindow: BrowserWindow | null = null;

// NODE_ENV 강제 설정
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'electron-dev';
}

async function loadMainWindow() {
  console.log('Current NODE_ENV:', process.env.NODE_ENV);
  const shouldUseDevServer =
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'electron-dev' ||
    !process.env.NODE_ENV;
  if (shouldUseDevServer) {
    const url = 'http://localhost:5173';
    let retries = 5;
    while (retries > 0) {
      try {
        await mainWindow!.loadURL(url);
        console.log('Successfully loaded Vite URL:', url);
        return;
      } catch (err) {
        console.error(
          `Failed to load ${url}, retrying... (${retries} left)`,
          err,
        );
        retries--;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    console.error('Failed to load Vite server after all retries');
    mainWindow!.webContents.executeJavaScript(
      'alert("Vite server failed to load. Check console.")',
    );
    app.quit();
  } else {
    const filePath = join(__dirname, '../dist/index.html');
    console.log('Falling back to file load, path:', filePath);
    try {
      await mainWindow!.loadFile(filePath);
      console.log('Successfully loaded production file');
    } catch (err) {
      console.error('Failed to load production file:', err);
      mainWindow!.webContents.executeJavaScript(
        'alert("Failed to load production file. Check console.")',
      );
      app.quit();
    }
  }
}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.webContents.openDevTools();

  loadMainWindow();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

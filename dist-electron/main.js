"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
let mainWindow = null;
async function loadMainWindow() {
    console.log('Current NODE_ENV:', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'electron-dev') {
        const url = 'http://localhost:5173';
        let retries = 5;
        while (retries > 0) {
            try {
                await mainWindow.loadURL(url);
                console.log('Successfully loaded Vite URL:', url);
                return;
            }
            catch (err) {
                console.error(`Failed to load ${url}, retrying... (${retries} left)`, err);
                retries--;
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
        console.error('Failed to load Vite server after all retries');
        mainWindow.webContents.executeJavaScript('alert("Vite server failed to load. Check console.")');
        electron_1.app.quit();
    }
    else {
        const filePath = (0, path_1.join)(__dirname, '../dist/index.html');
        console.log('Falling back to file load, path:', filePath);
        try {
            await mainWindow.loadFile(filePath);
            console.log('Successfully loaded production file');
        }
        catch (err) {
            console.error('Failed to load production file:', err);
            mainWindow.webContents.executeJavaScript('alert("Failed to load production file. Check console.")');
            electron_1.app.quit();
        }
    }
}
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: (0, path_1.join)(__dirname, 'preload.js'),
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
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import electron from 'vite-plugin-electron/simple';

export default defineConfig(async ({ mode }) => {
  const isElectronDev = mode === 'electron-dev';
  const { default: tailwindcss } = await import('@tailwindcss/vite');

  return {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
    theme: {
      extend: {},
    },
    css: {
      postcss: './postcss.config.js',
    },
    plugins: [
      react(),
      tailwindcss(),
      !isElectronDev &&
        VitePWA({
          registerType: 'autoUpdate',
          manifest: {
            name: 'My Vite React PWA',
            short_name: 'MyPWA',
            description: 'My React app with PWA support',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            icons: [
              {
                src: '/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
              },
              {
                src: '/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
              },
            ],
          },
        }),
      isElectronDev
        ? electron({
            main: {
              entry: 'electron/main.ts',
            },
            preload: {
              input: 'electron/preload.ts',
            },
            renderer: {},
          })
        : null,
    ].filter(Boolean),
    server: {
      port: 5173,
      strictPort: true,
      host: '0.0.0.0',
      hmr: {
        port: 5173,
        protocol: 'ws',
        host: 'localhost',
      },
    },
  };
});

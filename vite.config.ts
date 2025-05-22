import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update the PWA when new content is available
      injectRegister: 'auto',    // Or 'script' or null, 'auto' tries to find the best way
      devOptions: {
        enabled: true, // Enable PWA in development mode for testing
        type: 'module', // Recommended for dev
      },
      manifest: {
        name: 'SocialSync',
        short_name: 'SocialSync',
        description: 'A simple portal to help compose posts for social media.',
        theme_color: '#8A2BE2', // BlueViolet - for the browser UI, address bar
        background_color: '#000000', // Black - for splash screen background
        display: 'standalone',    // Makes it feel more like an app
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png', // Path relative to public folder
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png', // Path relative to public folder
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512-maskable.png', // Maskable icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Workbox options for service worker generation
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'], // Cache common assets
        runtimeCaching: [ // Example: Cache API calls (if you had them) or external fonts
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'; // Import the plugin and its type

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SocialSync/', // <--- THIS IS THE CRITICAL ADDITION
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'SocialSync',
        short_name: 'SocialSync',
        description: 'A simple portal to help compose posts for social media.',
        theme_color: '#8A2BE2',
        background_color: '#000000',
        display: 'standalone',
        scope: '/SocialSync/',    // Adjusted scope for subdirectory
        start_url: '/SocialSync/', // Adjusted start_url for subdirectory
        icons: [
          {
            src: 'icons/icon-192x192.png', // Adjusted path for base
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png', // Adjusted path for base
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512-maskable.png', // Adjusted path for base
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
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
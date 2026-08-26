import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/public/**',
        '**/*.mp4',
        '**/*.webm',
        '**/*.ogg',
        '**/*.mp3',
        '**/*.wav',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
        '**/*.svg',
        '**/*.tmp',
        '**/*.~tmp',
        '**/*.tmp.*',
        '**/.git/**',
      ],
    },
  },
});

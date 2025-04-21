import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lab5-ci-cd/',
  test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/SetupTest.tsx',
  },
});


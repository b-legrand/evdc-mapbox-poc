/// <reference types="vitest" />
import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
      coverage: {
        reporter: ['text', 'json-summary', 'json'],
        reportOnFailure: true,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});

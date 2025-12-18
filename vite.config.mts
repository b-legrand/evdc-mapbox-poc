/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    test: {
      globals: true,
      environment: 'jsdom',
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

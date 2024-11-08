/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shadcn/ui': path.resolve(__dirname, 'node_modules/@shadcn/ui'),
    },
  },
});

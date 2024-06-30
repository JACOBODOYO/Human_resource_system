import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Specify the output directory
    rollupOptions: {
      input: './index.html'  // Ensure this points to your entry HTML file
    }
  }
});


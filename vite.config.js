import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Output as a library
    lib: {
      entry: './src/main.jsx', // Path to the entry file of your app
      name: 'MyReactApp', // The global variable to attach to
      formats: ['umd'], // Universal Module Definition, suitable for script tag inclusion
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom'],
      output: {
        // Global variables for external dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});

import fs from 'node:fs/promises';
import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index',
  output: { dir: 'dist', format: 'esm' },
  external: ['react/jsx-runtime', 'react-dom/client'],
  plugins: [
    {
      name: 'clean-dist',
      buildStart: () => fs.rm('./dist', { recursive: true, force: true }),
    },
  ],
});

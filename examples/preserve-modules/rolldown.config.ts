import fs from 'node:fs/promises';
import { defineConfig } from 'rolldown';

export default defineConfig({
  input: ['src/entry-a', 'src/entry-b'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
  },
  plugins: [
    {
      name: 'clean-dist',
      buildStart: () => fs.rm('./dist', { recursive: true, force: true }),
    },
  ],
});

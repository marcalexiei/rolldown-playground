import fs from 'node:fs/promises';
import { describe, it } from 'node:test';

describe('example-preserve-modules', () => {
  const filesToCheck = [
    'dist/lib/utils.js',
    'dist/entry-a.js',
    'dist/entry-b.js',
  ];

  filesToCheck.forEach((filePath) => {
    it(`produces "${filePath}"`, async (t) => {
      const content = await fs.readFile(filePath, 'utf-8');
      t.assert.snapshot(content.split('\n'));
    });
  });
});

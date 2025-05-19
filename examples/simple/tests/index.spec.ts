import fs from 'node:fs/promises';
import { describe, it } from 'node:test';

describe('example-simple', () => {
  it('produces `dist/index.js`', async (t) => {
    const content = await fs.readFile('dist/index.js', 'utf-8');
    t.assert.snapshot(content.split('\n'));
  });
});

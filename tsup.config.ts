import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  splitting: true,
  sourcemap: false,
  clean: true,
  target: 'esnext',
  treeshake: true,
  dts: true,
  metafile: true,
  async onSuccess() {
    // Adds a new line after the build is done, so the next log is not next to the build log.
    console.log('\n');
  },
});

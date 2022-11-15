import { defineConfig } from 'tsup'

export default defineConfig([
  {
    format: ['esm', 'cjs'],
    outDir: 'plop',
    dts: true,
    silent: true,
  },
])

import { defineConfig } from 'tsup';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig([
  // Presentational & Universal Components (RSC Friendly)
  {
    entry: {
      index: 'src/index.ts',
      'components/button/index': 'src/components/button/index.ts',
      'components/badge/index': 'src/components/badge/index.ts',
      'components/card/index': 'src/components/card/index.ts',
      'components/input/index': 'src/components/input/index.ts',
      'components/textarea/index': 'src/components/textarea/index.ts',
      'components/separator/index': 'src/components/separator/index.ts',
      'components/container/index': 'src/components/container/index.ts',
      'lib/utils': 'src/lib/utils.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: false,
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@amansanoj/brand',
    ],
    onSuccess: async () => {
      // Copy compiled stylesheet to dist/styles.css
      const srcCss = path.resolve(__dirname, 'src/styles/ui.css');
      const distCss = path.resolve(__dirname, 'dist/styles.css');
      if (fs.existsSync(srcCss)) {
        fs.mkdirSync(path.dirname(distCss), { recursive: true });
        fs.copyFileSync(srcCss, distCss);
        console.log('✅ Emitted dist/styles.css');
      }
    },
  },
  // Interactive Client-Only Components (Explicit "use client" banner)
  {
    entry: {
      'components/dialog/index': 'src/components/dialog/index.ts',
      'components/dropdown-menu/index': 'src/components/dropdown-menu/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: false,
    banner: {
      js: "'use client';",
    },
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@amansanoj/brand',
    ],
  },
]);

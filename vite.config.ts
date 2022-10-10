import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetMini(),
        presetIcons({ /* options */ }),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});

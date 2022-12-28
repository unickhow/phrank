import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  base: '/phrank/',
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetMini(),
        presetIcons({ /* options */ }),
      ],
      shortcuts: {
        'container': 'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8',
        'btn': 'border-none bg-transparent border-0 rounded cursor-pointer'
      }
    }),
  ],
  build: {
    target: 'esnext',
  },
});

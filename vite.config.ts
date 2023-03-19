import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from "url"
import path, { format } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue({
    template: {
      compilerOptions:  {
        isCustomElement: (tag) => {
          return tag.startsWith('/') // (return true)
      }
    }
  }
  })],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      "@components": path.resolve(__dirname, "src/components"),
      
    }
  }
})

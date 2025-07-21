// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Hacer las variables de entorno disponibles en el cliente
      'import.meta.env.N8N_CHATBOT_WEBHOOK_URL': JSON.stringify(process.env.N8N_CHATBOT_WEBHOOK_URL),
      'import.meta.env.CHATBOT_MAX_MESSAGES': JSON.stringify(process.env.CHATBOT_MAX_MESSAGES),
      'import.meta.env.CHATBOT_TYPING_DELAY': JSON.stringify(process.env.CHATBOT_TYPING_DELAY),
      'import.meta.env.CHATBOT_SCROLL_THRESHOLD': JSON.stringify(process.env.CHATBOT_SCROLL_THRESHOLD),
    }
  },
  site: 'https://wilsondelcanto.dev',
  base: '/',
});
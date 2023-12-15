import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          '0%': {
            background: 'rgba(255,255,255,0.1)',
          },
          '100%': {
            background: 'none',
          },
        }
      },
      animation: {
        highlight: 'highlight 1s',
      }
    },
  },
  plugins: [daisyui],
} satisfies Config;

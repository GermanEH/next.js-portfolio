import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/**/*/.{js, jsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '130': '40rem',
        '140': '45rem',
        '150': '50rem',
        '160': '55rem',
        '170': '60rem',
        '180': '65rem',
        '190': '70rem',
        '200': '75rem',
        '210': '80rem',
        '220': '85rem',
        '230': '90rem',
        '240': '95rem',
        '242': '96rem',
      },
      scale: {
        '500': '5'
      }
    },
  },
  plugins: [
    plugin(function ({addUtilities}: any){
      addUtilities({
        ".transform-about": {
          'transform': 'rotateY(180deg) scale(5) translateX(-30%) translateY(-30%)'
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".transform-projects": {
          'transform': 'rotateY(180deg) scale(5) translateX(-10%) translateY(-30%)'
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".transform-contact": {
          'transform': 'rotateY(180deg) scale(5) translateX(10%) translateY(-30%)'
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".preserve-3d": {
          'transformStyle': 'preserve-3d'
        },
        ".perspective-1000": {
          'perspective': '1000px'
        },
        ".backface-hidden": {
          'backfaceVisibility': 'hidden'
        }
      })
    })
  ],
};
export default config;

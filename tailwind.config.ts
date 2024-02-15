import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./**/*/.{js, jsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        ".rotate-y-180": {
          "transform": 'rotateY(180deg) translateY(-75%)'
        },
        ".transform-about": {
          'transform': 'rotateY(180deg) scaleY(2) scaleX(4.5) translateX(-30%) translateY(-50%)',
          "padding": '0'
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".translate": {
          'transform': 'translateY(-50%)'
        },
        ".no-transform-about": {
          'transform': 'scaleY(0.43) scaleX(0.22)'
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".transform-projects": {
          'transform': 'rotateY(180deg) scaleY(2) scaleX(4.5) translateX(-6.5%) translateY(-30%)',
          // 'transform': 'rotateY(180deg) scale(5) translateX(160%) translateY(-150%)'
        },
        ".transform-contact": {
          'transform': 'rotateY(180deg) scaleY(2) scaleX(4.5) translateX(16%) translateY(-30%)'
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
        },
        ".flip-card-inner":{
          "transition": 'transform 0.6s',
          "transform-style": "preserve-3d"
        },
        ".flip-card-front":{
          "position":"absolute",
          'backfaceVisibility': 'hidden',
        },
         ".flip-card-back": {
          "position":"absolute",
          'backfaceVisibility': 'hidden',
          "transform": 'rotateY(180deg)'
        }
      })
    })
  ],
};
export default config;

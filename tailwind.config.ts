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
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'mobile-hd':'720px',
        'mobile-full-hd':'1080px',
        'mobile-qhd':'1125px',
        'desktop-hd':'1366px',
        'desktop-full-hd':'1920px'
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
          "transform": 'rotateY(180deg)'
        },
        ".rotate-y-180-sm": {
          "transform": 'rotateY(180deg)'
        },
        ".rotate-y-180-md": {
          "transform": 'rotateY(180deg)'
        },
        ".rotate-y-180-lg": {
          "transform": 'rotateY(180deg)'
        },
        ".rotate-y-180-xl": {
          "transform": 'rotateY(180deg)'
        },
        ".rotate-y-180-about": {
          'transform': 'rotateY(180deg) translateY(-80%)'
        },
        ".rotate-y-180-projects": {
          'transform': 'rotateY(180deg) translateY(-70%)'
        },
        ".rotate-y-180-contact": {
          'transform': 'rotateY(180deg)translateY(-80%)'
        },

        ".transform-about-mobile-s": {
          'transform': 'rotateY(180deg) scaleY(3.2) scaleX(1.5) translateX(18.5vw) translateY(6vh)',
        },
        ".transform-about-mobile-m": {
          'transform': 'rotateY(180deg) scaleY(2.8) scaleX(1.8) translateX(23vw) translateY(9vh)',
        },
        ".transform-about-mobile-l": {
          'transform': 'rotateY(180deg) scaleY(2.5) scaleX(2) translateX(26vw) translateY(8vh)',
        },
        ".transform-about-sm": {
          'transform': 'rotateY(180deg) scaleY(5) scaleX(3) translateX(34.6vw) translateY(4vh)',
        },
        ".transform-about-mobile-hd": {
          'transform': 'rotateY(180deg) scaleY(5.5) scaleX(3.5) translateX(36vw) translateY(6vh)',
        },
        ".transform-about-md": {
          'transform': 'rotateY(180deg) scaleY(5.5) scaleX(3.8) translateX(37vw) translateY(6vh)',
        },
        ".transform-about-lg": {
          'transform': 'rotateY(180deg) scaleY(4) scaleX(5.1) translateX(-4.7vw) translateY(-17vh)',

        },
        ".transform-about-mobile-full-hd":{
          'transform': 'rotateY(180deg) scaleY(4) scaleX(5.1) translateX(-4.3vw) translateY(-16vh)',
        },
        ".transform-mobile-qhd":{

        },
        ".no-transform-about": {
          'transform': 'scaleY(0.28) scaleX(0.22)'
        },
        ".transform-about-xl": {
          'transform': 'rotateY(180deg) scaleY(3.6) scaleX(4.5) translateX(-25%) translateY(-16.5vh) ',

        },
        ".transform-desktop-hd":{
          'transform': 'rotateY(180deg) scaleY(3.6) scaleX(4.5) translateX(-25%) translateY(-16.5vh) ',
        },
        ".transform-about-2xl": {
          'transform': 'rotateY(180deg) scaleY(3.6) scaleX(4) translateX(-50%) translateY(-20vh)',
        },
        ".transform-desktop-full-hd":{

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

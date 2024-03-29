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
        'desktop-hd':'1360px',
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
          'transform': 'rotateY(180deg) scaleY(2.8) scaleX(1.4) translateX(18.5vw) translateY(8vh)',
        },
        ".transform-about-mobile-m": {
          'transform': 'rotateY(180deg) scaleY(2.7) scaleX(1.5) translateX(19vw) translateY(16vh)',
        },
        ".transform-about-mobile-l": {
          'transform': 'rotateY(180deg) scaleY(2.4) scaleX(1.6) translateX(17vw) translateY(12vh)',
        },
        ".transform-about-sm": {
          'transform': 'rotateY(180deg) scaleY(6) scaleX(2.5) translateX(24vw) translateY(7vh)',
        },
        ".transform-about-mobile-hd": {
          'transform': 'rotateY(180deg) scaleY(5) scaleX(2.8) translateX(26vw) translateY(5vh)',
        },
        ".transform-about-md": {
          'transform': 'rotateY(180deg) scaleY(5) scaleX(3.1) translateX(27vw) translateY(6vh)',
        },
        ".transform-about-lg": {
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(4.1) translateX(-5.7vw) translateY(-16vh)',
        },
        ".transform-about-mobile-full-hd":{
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(5.1) translateX(-4.3vw) translateY(-15vh)',
        },
        ".no-transform-about": {
          'transform': 'scaleY(0.28) scaleX(0.22)'
        },
        ".transform-about-xl": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(5) translateX(-4vw) translateY(-15vh) ',
        },
        ".transform-about-desktop-hd": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(4.8) translateX(-4.5vw) translateY(-15vh) ',
        },
        ".transform-about-2xl": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(4.2) translateX(-5.6vw) translateY(-22vh)',
        },
        ".transform-about-desktop-full-hd":{
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(3.4) translateX(-7.2vw) translateY(-22vh)',
        },
        ".transform-projects-mobile-s": {
          'transform': 'rotateY(180deg) scaleY(2.7) scaleX(1.4) translateX(18.5vw) translateY(-6vh)',
        },
        ".transform-projects-mobile-m": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(1.5) translateX(19vw) translateY(2vh)',
        },
        ".transform-projects-mobile-l": {
          'transform': 'rotateY(180deg) scaleY(2.4) scaleX(1.7) translateX(17vw) translateY(-2vh)',
        },
        ".transform-projects-sm": {
          'transform': 'rotateY(180deg) scaleY(7) scaleX(2.45) translateX(24.3vw) translateY(4vh)',
        },
        ".transform-projects-mobile-hd": {
          'transform': 'rotateY(180deg) scaleY(7) scaleX(2.8) translateX(26vw) translateY(4vh)',
        },
        ".transform-projects-md": {
          'transform': 'rotateY(180deg) scaleY(7) scaleX(3.1) translateX(27vw) translateY(5vh)',
        },
        ".transform-projects-lg": {
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(4.2) translateX(-0.2vw) translateY(-16vh)',
        },
        ".transform-projects-mobile-full-hd":{
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(5.1) translateX(0.5vw) translateY(-16vh)',
        },
        ".no-transform-projects": {
          'transform': 'scaleY(0.28) scaleX(0.22)'
        },
        ".transform-projects-xl": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(5) translateX(-0.1vw) translateY(-15vh) ',
        },
        ".transform-projects-desktop-hd": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(4.7) translateX(-0.7vw) translateY(-15vh) ',
        },
        ".transform-projects-2xl": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(4.2) translateX(-1.6vw) translateY(-22vh)',
        },
        ".transform-projects-desktop-full-hd":{
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(3.4) translateX(-3.2vw) translateY(-22vh)',
        },
        ".transform-contact-mobile-s": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(1.6) translateX(22vw) translateY(-8vh)',
        },
        ".transform-contact-mobile-m": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(1.7) translateX(22vw) translateY(3vh)',
        },
        ".transform-contact-mobile-l": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(1.8) translateX(20vw) translateY(2vh)',
        },
        ".transform-contact-sm": {
          'transform': 'rotateY(180deg) scaleY(8.5) scaleX(2.75) translateX(26vw) translateY(6vh)',
        },
        ".transform-contact-mobile-hd": {
          'transform': 'rotateY(180deg) scaleY(8.5) scaleX(3.2) translateX(27.5vw) translateY(7vh)',
        },
        ".transform-contact-md": {
          'transform': 'rotateY(180deg) scaleY(8) scaleX(3.4) translateX(28.2vw) translateY(6vh)',
        },
        ".transform-contact-lg": {
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(4.6) translateX(5.8vw) translateY(-16vh)',
        },
        ".transform-contact-mobile-full-hd":{
          'transform': 'rotateY(180deg) scaleY(4.2) scaleX(5.1) translateX(-4.3vw) translateY(-15vh)',
        },
        ".no-transform-contact": {
          'transform': 'scaleY(0.28) scaleX(0.22)'
        },
        ".transform-contact-xl": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(5) translateX(4vw) translateY(-15vh) ',
        },
        ".transform-contact-desktop-hd": {
          'transform': 'rotateY(180deg) scaleY(3.8) scaleX(4.7) translateX(3.3vw) translateY(-15vh) ',
        },
        ".transform-contact-2xl": {
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(4.2) translateX(2.2vw) translateY(-22vh)',
        },
        ".transform-contact-desktop-full-hd":{
          'transform': 'rotateY(180deg) scaleY(2.6) scaleX(3.4) translateX(0.5vw) translateY(-22vh)',
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

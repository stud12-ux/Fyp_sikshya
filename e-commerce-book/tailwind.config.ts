import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',  // You can change the size as per your needs
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1736px',
    },
    container: {
      center: true,
      screens:{
        sm: '440px',  // You can change the size as per your needs
        md: '668px',
        lg: '984px',
        xl: '1180px',
       
        '2xl': '1436px',
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
       
        },
        secondary: "#173f5f",
        tertiary: '#2d2d2d',
        quaternary: '#FFBF1C',

        quinary: '#9f0038',
        borderColor:'#E9E9E9',
        bodyColor:'#F5FBFF',
        dimmer:"#d5d5d5",
        text: {
          DEFAULT: "#4B4B4B",
          
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },

      boxShadow: {
        custom: `0px 0px 8px 0px rgba(2, 19, 79, 0.08)`,

      },
    },
  },
  plugins: [],
};
export default config;

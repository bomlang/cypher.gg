/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5383E8',
        background: '#222222',
        background2: '#EC4241',
        red200: '#DC8E85',
        burgundy: '#bf192e',
        round: '#C14143',
        dark: '#1C1C1F',
        white: '#fff',
        gray100: '#F7F7F9',
        gray200: '#ebeef1',
        gray400: '#9AA4AF',
        gray500: '#758592',
        gray900: '#202D37',
        navTextHover: '#B3CDFF',
        navAsideBg: '#FBD353'
      },
      backgroundImage: {
        whiteStar: "url('/starBookMark.svg')",
        yellowStar: "url('/starBookMarkYellow.svg')",
        xBtn: "url('/xButton.svg')"
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}

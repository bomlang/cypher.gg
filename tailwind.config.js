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
        red600: '#D31A45',
        burgundy: '#bf192e',
        round: '#C14143',
        dark: '#1C1C1F',
        white: '#fff',
        gray100: '#F7F7F9',
        gray200: '#ebeef1',
        gray250: '#DBE0E4',
        gray400: '#9AA4AF',
        gray500: '#758592',
        gray900: '#202D37',
        navTextHover: '#B3CDFF',
        navAsideBg: '#FBD353',
        unique: '#EB6876',
        rare: '#788AFF',
        Uncommon: '#2AA79D',
        common: '#808080',
        notWorn: '#383838',
        gameBlue100: '#ECF2FF',
        gameBlue200: '#D5E3FF',
        gameBlue300: '#B3CDFF',
        gameBlue400: '#81ACFF',
        gameBlue500: '#5383E8',
        gameBlue600: '#4171D6',
        gameRed100: '#FFF1F3',
        gameRed200: '#FFD8D9',
        gameRed300: 'FFBAC3',
        gameRed400: '#FF6C81',
        gameRed500: '#E84057',
        gameRed600: '#D31A45'
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

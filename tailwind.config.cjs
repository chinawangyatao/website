
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // 导入调色板颜色
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.rose,
        blue: colors.sky,
        yellow: colors.yellow,
        white:colors.white,
        purple:colors.purple,
        purpleTitle:"#5924d9",
        yellowTitle:"#f39800",
        navy:{
          0: "#f2f6fa",
          100: "#dde8f4",
          200: "#a1bddc",
          300: "#6b90c0",
          400: "#3b64a0",
          500: "#2a456d",
          600: "#253e62",
          700: "#213757",
          800: "#192a42",
          900: "#101c2c",
          1000: "#080e16",
        },
        indigo:{
          0: "#f7f8ff",
          100: "#eaeeff",
          200: "#c2cfff",
          300: "#9cb2ff",
          400: "#7793ff",
          500: "#637eff",
          600: "#5872e5",
          700: "#4f65cc",
          800: "#3b4c99",
          900: "#273266",
          1000: "#131933",
        }
      },
      // 自定义盒子阴影
      boxShadow:{
        elementBox: "0 100px 80px rgba(22,61,151,.07), 0 41.7776px 33.4221px rgba(22,61,151,.05), 0 22.3363px 17.869px rgba(22,61,151,.042), 0 12.5216px 10.0172px rgba(22,61,151,.035), 0 6.6501px 5.32008px rgba(22,61,151,.028), 0 2.76726px 2.21381px rgba(22,61,151,.02)"
      },
      // 背景图片
      backgroundImage: {
        'home-image': "url('@/assets/homeimage/background-chart.svg')",
        'home-image2': "url('@/assets/homeimage/section-bg-blurred-spots-1.png')",
        'bg-banner1':"url('@/assets/casesimage/bg-banner.png')",
        'bg-mini1':"url('@/assets/solutionImage/bg-mini.jpg')"
      },
      // 翻转
      rotate:{
        "360":"360deg"
      },
      // 屏幕
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};


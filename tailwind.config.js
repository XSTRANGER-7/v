/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(243.43deg, #1F2329 0.37%, #1D2026 100%)",
        gradient2: "linear-gradient(190.43deg, #0799C8 30%, #113F51 60%)",
        gradient3: "linear-gradient(210.43deg, #0799C8 5%, #113F51 31%)",
        gradient4: "linear-gradient(210.43deg, #3730a3 1%, #1F2329 41%)",
      },
      //  animation: {
      //   moveBubble: 'moveBubble linear forwards',
      // },
      // keyframes: {
      //   moveBubble: {
      //     '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
      //     '100%': { transform: 'translateY(-110vh) scale(1.5)', opacity: '0' },
      //   },
      // },
      keyframes: {
        moveBubble: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translate(100vw, 100vh) scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        moveBubble: 'moveBubble linear infinite',
      },

    },
  },
  plugins: [],
}


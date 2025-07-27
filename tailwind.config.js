// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjust based on your folders
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
      colors: {
        primary: '#12263f',
        secondary: '#469ada',
        bodyColor: "#0a000aff",
        sectionColor: "#1a0019ff",
        cardColor: "#330033ff",
        titleColor: "#750075ff",
        textColor: "#ffffffff",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px',
      }
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
    
  },
  plugins: [],
}

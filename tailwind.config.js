module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/Header/Header.jsx",
    "./src/Pages/Home/Home.jsx",
    "./src/Pages/Results/Results.jsx",
    "./src/Components/Modal/Modal.jsx",
    "./src/Pages/Random/Random.jsx",
    "./src/Pages/Search-Error/SearchError.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/src/assets/hero.jpg')"
      },
      spacing: {
        "100": "100px",
        "111": "1920px"
      },
      fontFamily: {
        'dancing-script': ['Dancing Script']
      }
    },
    container: {
      padding: {
        DEFAULT: "5rem"
      }
    },
  },
  plugins: [],
}

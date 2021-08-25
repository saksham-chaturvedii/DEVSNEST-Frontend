// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        4.5: "72px",
        49.194375: "787.11px",
        37.5: "600px",
        29.63875: "474.22px",
        43.75: "700px",
        31.25: "500px",
      },
      height: {
        4.5: "72px",
        5.75: "92px",
        52.189375: "835.03px",
        7.333125: "117.33px",
        24.020625: "384.33px",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      fontWeight: {
        mediumplus: "450",
      },
      colors: {
        "nav-color": "#9c85d2",
      },
      padding: {
        8: "34px",
        7.8125: "125px",
      },
      boxShadow: {
        navbar: "0 .125rem .25rem rgba(0,0,0,.075)",
      },
      fontSize: {
        2.625: "42px",
      },
      textColor: {
        independent: "#8367c7",
      },
      margin: {
        4.5: "72px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

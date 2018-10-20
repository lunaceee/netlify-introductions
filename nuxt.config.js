module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "netlify-introductions",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "An internal tool for Netlify employees using Vue, Netlify Identity and Functions"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display"
      }
    ]
  },
  router: {
    middleware: "pages"
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {}
};

var glob = require("glob");
var path = require("path");

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  "/intros": "intros/*.json"
});

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
          "An internal tool for Netlify employees using Vue, Netlify CMS and Functions"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/netlify.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      }
    ]
  },
  modules: ["@nuxtjs/vuetify"],
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
  build: {},
  /**
   * Create an array of URLs from a list of files
   * @param {*} urlFilepathTable
   */
  generate: {
    routes: dynamicRoutes
  }
};

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".json")}`);
    })
  );
}

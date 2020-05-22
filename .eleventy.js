const CleanCSS = require("clean-css");
const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function (config) {
  config.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("./posts/*.md")
      .filter((post) => {
        return post.data.status != "draft";
      })
      .reverse();
  });

  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addPlugin(pluginPWA);

  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy("manifest.json");
  config.addPassthroughCopy("images");
};

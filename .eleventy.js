const CleanCSS = require("clean-css");
const fs = require("fs");

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

  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404/index.html");
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy("manifest.json");
  config.addPassthroughCopy("assets");
};

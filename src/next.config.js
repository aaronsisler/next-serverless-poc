const withSass = require("@zeit/next-sass");

module.exports = withSass({
  distDir: "../.next",
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
          outputPath: "static/fonts",
          publicPath: "../fonts"
        }
      }
    });

    return config;
  }
});

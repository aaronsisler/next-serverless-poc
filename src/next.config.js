const withSass = require("@zeit/next-sass");

module.exports = withSass({
  distDir: "../.next",
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "./",
          outputPath: "static/css/",
          name: "[name].[ext]"
        }
      }
    });

    return config;
  }
});

const withSass = require("@zeit/next-sass");

const nextConfig = {
  distDir: "../.next"
};

const sassConfig = {
  test: /\.(eot|otf|ttf|woff|woff2)$/,
  use: {
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name]-[hash].[ext]",
      outputPath: "static/fonts",
      publicPath: "../fonts"
    }
  }
};

const imagesConfig = {
  test: /\.(ico)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name]-[hash].[ext]",
      outputPath: "static/images",
      publicPath: "_next/static/images"
    }
  }
};

module.exports = withSass({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(sassConfig);
    config.module.rules.push(imagesConfig);

    return config;
  }
});

const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

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
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name]-[hash].[ext]",
      outputPath: "static/images",
      publicPath: "../images"
    }
  }
};

// module.exports = withPlugins([[withSass, sassConfig]], nextConfig);

// module.exports = withSass(
//   withImages({
//     ...nextConfig,
//     webpack(config) {
//       config.module.rules.push(sassConfig);
//       config.module.rules.push(imagesConfig);

//       return config;
//     }
//   })
// );

module.exports = withSass({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(sassConfig);

    return config;
  }
});

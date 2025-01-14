module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  //   module: { 
  //     rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //       }
  //     },

  //     {
  //       test: /\.scss$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         {
  //           loader: "postcss-loader",
  //           options: {
  //             plugins: () => [
  //               require("autoprefixer")()
  //             ],
  //           },
  //         },
  //         'sass-loader',
  //       ]
  //     },

  //     {
  //       test: /\.(jpg|jpeg|gif|png)$/,
  //       use: {
  //         loader: 'file-loader',
  //         options: {
  //           name: '[name].[ext]',
  //           publicPath: 'images',
  //           outputPath: 'images',
  //         }
  //       }
  //     },

  //     {
  //       test: /\.(eot|ttf|woff|woff2)$/,
  //       use: {
  //         loader: 'file-loader',
  //         options: {
  //           name: '[name].[ext]',
  //           publicPath: 'fonts',
  //           outputPath: 'fonts',
  //         }
  //       }
  //     },
  //     {
  //       test: /\.(sass|less|css)$/,
  //       use: ["style-loader", "css-loader", 'sass-loader'],
  //     },
  //   ]
  // },
  },
}

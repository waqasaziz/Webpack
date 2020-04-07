const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  // Path to entry point.
  entry: './src/js/index.js',

  // Path and filename of result bundle.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'site.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
  
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Applies postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            //Fransforms SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
            }
        }]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "site.css"
    })
  ]
};
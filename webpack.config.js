const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  mode: 'development',
  entry: './src/app',

  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './assets/map.html'
    })
  ],

  watch: true,
  output: {
    path: path.resolve('./dist'),
    filename: "gamedong-engine.js",
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            ["@babel/env", {
              "targets": {
                "browsers": "last 2 chrome versions"
              }
            }]
          ]
        }
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],

    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@assets': path.resolve(__dirname, './assets')
      
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  }
};
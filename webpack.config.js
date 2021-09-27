const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  mode: 'development',
  entry: './src/app',

  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "app.html",
      template: path.resolve(__dirname, './assets/map.html')
    })
  ],

  watch: true,
  output: {
    path: path.resolve('./dist'),
    filename: "gamedong-engine.js",
    library: 'GameDong',
    libraryTarget: 'umd',
    umdNamedDefine: true  ,
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/inline"
      },

      // {
      //   test: /\.html/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: 'dist/[name].html'
      //   }
      // }
    ]
  },
  resolve: {
    extensions: ['.json', '.js'],

    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@assets': path.resolve(__dirname, './assets'),
      '@autoload': path.resolve(__dirname, 'autoload')
      
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
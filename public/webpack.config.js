var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var lang = require('highlight.js-async-webpack/src/file.lang.hljs.js');
var _entry= {
    main: './src/main.js', // 原始入口
    vue: ['vue']
};
for (var i = 0; i < lang.length; i++) {
    _entry[lang[i]] = ['mavon-editor/dist/js/' + lang[i] + '.js']
}

module.exports = {
  entry: _entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'js/[name].js',
    // filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
          sass: ExtractTextPlugin.extract({
            loader: 'css-loader!sass-loader!',
            fallbackLoader: 'vue-style-loader'
          })
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
      "simplemde":"simplemde/dist/simplemde.min",
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

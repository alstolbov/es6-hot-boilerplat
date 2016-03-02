var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: ["webpack/hot/dev-server", "./src/js/app.js"]
    },

    output: {
        path: 'public',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
              {
                  test: /\.css$/,
                  // loader: 'style!css'
                  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ],

    devtool: '#inline-source-map'

};

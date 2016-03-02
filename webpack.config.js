var path = require('path');
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
                loader: 'style!css'
            }
        ]
    },

    devtool: '#inline-source-map'

};

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        "tab-lover": path.join(__dirname,'src','index.js'),
        "tab-lover.min": path.join(__dirname,'src','index.js'),
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
var path = require('path');
var webpack = require('webpack');
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './src/index.jsx',
    output: {
        path: __dirname + "/build",
        filename: "build.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]',
                options:{
                    publicPath:'/'
                }
            }
        ]
    }
}

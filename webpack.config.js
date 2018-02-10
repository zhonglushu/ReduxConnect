const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source_map',
    entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                //webpack1.x loader:  ExtractTextPlugin.extract("style-loader","css-loader")
                use: ExtractTextPlugin.extract({fallback:"style-loader",use:"css-loader"}),
                // use: [
                //     {
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader",
                //         options: {
                //             modules: true
                //         }
                //     }
                // ]
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader", "sass-loader"]}),
                // use: [
                //     {
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader",
                //         options: {
                //             modules: true
                //         }
                //     }
                // ]
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                loader: "url-loader?limit=10000",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Author: rambo'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}
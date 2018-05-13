const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        publicPath: "/public/",
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: __dirname + "/public/",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        host: "localhost",
        port: 9000
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
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true
        // }),
        new ExtractTextPlugin("style.css")
    ]
}
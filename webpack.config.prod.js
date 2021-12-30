const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base')


module.exports = {
    ...base,
    mode: 'production',
    // plugins: [new HtmlWebpackPlugin({
    //     title: 'Rain',  //html的title
    //     template: 'src/assets/index.html'
    // }),//自动生成html
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ], //自动生成css
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }

};


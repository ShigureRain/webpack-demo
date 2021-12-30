const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
    ...base,  //把base先写入这里
    // mode: 'development',
    // plugins: [new HtmlWebpackPlugin({
    //     title: 'Rain',  //html的title
    //     template: 'src/assets/index.html'
    // }),//自动生成html
    // ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
    },  //快速调试
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

};


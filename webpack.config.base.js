const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',  //入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index[contenthash].js'  //出口
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Rain',  //html的title
            template: 'src/assets/index.html'
        }),//自动生成html
    ],
};


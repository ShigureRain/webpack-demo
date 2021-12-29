var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  //入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'  //出口
    }
};
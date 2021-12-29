var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  //入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index[contenthash].js'  //出口
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Rain',  //html的title
        template: 'src/assets/index.html'
    })], //自动生成html
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

};


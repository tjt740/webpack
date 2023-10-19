const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        client: {
            progress: true, // 在浏览器中以百分比显示编译进度。
            overlay: true, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }), // Generates default index.html
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
};

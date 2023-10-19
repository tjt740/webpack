const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        new BundleAnalyzerPlugin(), // 代码检查分析工具
        new HtmlWebpackPlugin({
            title: 'Caching',
        }), // Generates default index.html
    ],
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

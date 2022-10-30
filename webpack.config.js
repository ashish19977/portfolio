// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

// eslint-disable-next-line no-unused-vars
const { NODE_ENV = 'development', PORT = 3000 } = process.env

const commonConfig = {
    entry: {
        main: './src',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
}


const devConfig = {
    mode : 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true,
                        }
                    },
                    { loader: 'postcss-loader' },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            title: 'Ashish Kumar\'s Resume'
        }),
        new miniCSSExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        }
    },      
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}


const prodConfig = {
    mode : 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                use: [
                    { loader: miniCSSExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true,
                        }
                    },
                    { loader: 'postcss-loader' },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new miniCSSExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    ],
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}


module.exports = {
    ...commonConfig,
    ...['prod', 'production'].includes(process.env.NODE_ENV) ? prodConfig : devConfig
}

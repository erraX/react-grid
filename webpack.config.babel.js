import path from 'path'
import webpack from 'webpack'

export default {
    entry: './example/main.js',

    devtool: 'source-map',

    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: ['style', 'css']
            },
            {
                test: /\.less/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|dep)/,
                loader: 'babel-loader'
            }
        ]
    }
}


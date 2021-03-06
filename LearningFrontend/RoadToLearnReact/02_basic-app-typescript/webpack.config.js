/* 
 * WebpackReactorTypeScript - The amazing Plasmoxy's TypeScript React WebPack config!
 */

const path = require('path')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/App.tsx',

    devServer: {
        publicPath: '/',
        contentBase: dist,
        hot: false
    },

    output: {
        filename: '[name].bundle.js',
        path: dist,
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [ 'ts-loader' ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=1000000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ],
    },
};
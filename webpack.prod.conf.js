var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// publicPath需要修改成线上cdn的地址

module.exports = {
    entry: {
        main: [path.resolve(__dirname, 'src/entry.js')],
        vendors: ['vue', 'vue-router', 'vue-resource', 'vuex']
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[id].[hash:7].js'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js',
            'pages': path.resolve(__dirname, 'src/pages'),
            'utils': path.resolve(__dirname, 'src/utils'),
            'plugins':path.resolve(__dirname, 'src/plugins'),
            'components': path.resolve(__dirname, 'src/components'),
            'apis': path.resolve(__dirname, 'src/apis'),
            'plugin': path.resolve(__dirname, 'src/plugin')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('css/[name].[hash:7].css'),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.[hash:7].js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-vue-jsx', 'transform-runtime']
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader')
        },
        postcss: [
            autoprefixer({ browsers: ['last 7 versions'] }),
        ]
    }
}

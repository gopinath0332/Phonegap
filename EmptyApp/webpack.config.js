const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
console.log("ENV:::::" + ENV);
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'www'),
};

process.env.BABEL_ENV = ENV;

const common = {
    entry: PATHS.app + "/app.jsx",
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            loader: 'babel?cacheDirectory',
            include: PATHS.app,
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url'
        }]
    }
};

if (ENV === 'development') {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.build,

            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            host: process.env.HOST,
            port: process.env.PORT,
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery"
            // })
        ],
    });
} else {
    // config can be added here for minifying / etc
    module.exports = merge(common, {});
}

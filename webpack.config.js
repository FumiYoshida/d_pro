// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "desktop_lighter": "./src/DesktopLighter.jsx",
        "s_remo": "./src/sRemo.jsx",
    },
    output: { path: path.join(__dirname, 'dist'), filename: '[name].bundle.js' },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
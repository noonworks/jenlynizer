const path = require('path');

module.exports = {
    entry: {
        options: './src/options.js',
        jenlynize: './src/jenlynize.js',
        background: './src/background.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js')
    }
};
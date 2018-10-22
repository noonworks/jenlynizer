const path = require('path');

module.exports = {
    entry: {
        options: './src/options.ts',
        jenlynize: './src/jenlynize_entry.ts',
        background: './src/background_entry.ts'
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
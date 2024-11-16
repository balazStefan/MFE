const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever .mjs or .js will be processed by Babel
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader', // use babel-loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

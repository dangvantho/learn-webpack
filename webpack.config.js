const path= require('path')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename:'index.css'
    })]
}
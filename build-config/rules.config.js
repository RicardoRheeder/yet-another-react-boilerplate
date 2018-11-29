module.exports = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
},
{
    test: /\.html$/,
    exclude: /node_modules/,
    use: { loader: 'html-loader' }
}
]
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/app.jsx',
		vendor: ['react','react-dom','whatwg-fetch'],
	},
	output: {
		path: __dirname + '/static/scripts',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			filename:'vndrbundle.js'})
		],
	module: {
		loaders: [
		{
			test: /\.jsx$/,
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
				}
			}
		],
	}
}
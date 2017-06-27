const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: __dirname + '/static',
		filename: 'scripts/[name].js'
	},

	devServer: {
		compress: true,
		open: true,
		stats: 'errors-only'
	},

	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin("styles/[name].css")
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(jpg|png|JPG)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					}
				]
			}
		]
	}
}
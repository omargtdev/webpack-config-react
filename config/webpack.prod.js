const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
	devtool : "source-map",
	// separate dependencies in other file
	optimization : {
		splitChunks : {
			chunks : "all"
		}
	},
	// Separate css files in other file
	module : {
		rules : [
			{
				test : /.(css|scss|sass)$/,
				use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins : [
		new MiniCssExtractPlugin()
	]
}

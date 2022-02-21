const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {

	devServer: {
		port : 3000,
		open : true,
		// gzip compression
		compress: true,
		// Show only errors in full screen	
		client : {
			overlay: {
				errors : true,
				warnings : false
			}
		},
		hot: true
	},
	module : {
		rules : [
			{
				test : /.(css|scss|sass)$/,
				use : ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins : [
		new HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin()
	],
	// show original code lines
	devtool : "eval-source-map"
}

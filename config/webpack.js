const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

/* Basic sections cofigurations
 * entry
 * output
 * modules -> rules
 * resolve
 * plugins
 */

/** @type {import('webpack').Configuration} */
const commonConfig = {
	//entry : path.resolve(__dirname, 'src', 'index.js'), // Default
	output : {
		path : path.resolve(__dirname, '..', 'build'),
		filename : '[name].[contenthash].js'
	},
	module : {
		rules : [
			{
				use: 'babel-loader',
				test : /.(js|jsx)$/,
				exclude : /node_modules/,
				// options : presets -> babel.config.js
			},
			{
				// resolve assests (imgs, png, etc)
				type : 'asset',
				test : /\.(png|svg|jpg|jpeg|gif)$/i
			}
		]
	},
	resolve : {
		extensions : ['.js', '.jsx', '.json']
	},
	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template : path.resolve(__dirname, '..', 'public', 'index.html') })			
	]
}

module.exports = (env, args) => {
	if(!args.mode) throw new Error('No matching mode was found!');

	const isProduction = args.mode === 'production';

	return isProduction 
		? merge(commonConfig, prodConfig)
		: merge(commonConfig, devConfig);
}

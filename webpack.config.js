const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
		path : path.resolve(__dirname, 'build'),
		filename : '[main].[contenthash].js'
	},
	module : {
		rules : [
			{
				use: 'babel-loader',
				test : /.(js|jsx)$/,
				exclude : /node_modules/
				// options -> babel.config.js
			}
		]
	},
	resolve : {
		extensions : ['.js', '.jsx', '.json']
	},
	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template : path.resolve(__dirname, 'public', 'index.html') })			
	]
}

const proConfig = {
}

const devConfig = {
}

module.exports = (env, args) => {
	//const isProduction = args.mode === 'production';
	//return isProduction 
		//? proConfig
		//: devConfig;
	return commonConfig
}

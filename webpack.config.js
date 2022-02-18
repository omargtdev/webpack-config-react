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
		path : path.resolve(__dirname, 'build')
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
			
	]
}

const proConfig = {
	output : {
		filename : '[main].[contenthash].js'
	}
}

const devConfig = {
	output : {
		filename : 'main.js'
	}
}

module.exports = (env, args) => {
	//const isProduction = args.mode === 'production';
	//return isProduction 
		//? proConfig
		//: devConfig;
	return commonConfig
}

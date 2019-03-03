var path = require('path');

module.exports = {
	entry: {
		App: "./resume-master/assets/scripts/App.js",
	},
	output: {
		path: path.resolve(__dirname, "./resume-master/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
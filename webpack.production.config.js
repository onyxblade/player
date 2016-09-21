var webpack = require('webpack')

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [
			{ test: /\.js|jsx$/, loader: "babel" },
			{ test: /\.css$/, loader: "style!css?modules"},
			{ test: /\.png$/, loader: "url"},
			{ test: /\.html$/, loader: "file?name=[name].[ext]"}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}
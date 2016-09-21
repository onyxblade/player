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
			{ test: /\.css$/, loader: "style!css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"},
			{ test: /\.png$/, loader: "url"},
			{ test: /\.html$/, loader: "file?name=[name].[ext]"}
		]
	}
}
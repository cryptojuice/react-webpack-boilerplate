const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		example: { import: "./index.tsx", filename: "bundle.js" },
		shared: ["react", "react-dom"]
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "http://localhost:3000/dist/",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"),
		},
		compress: true,
		port: 3000,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};

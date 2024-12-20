const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Use production mode for optimizations
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory for production build
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript files
        },
      },
      {
        test: /\.css$/,  // Match all .css files
        use: ['style-loader', 'css-loader'],  // Use these loaders for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Built-in Webpack asset module
      },
      {
        test: /\.ico$/,
        type: 'asset/resource',  // Use Webpack's built-in asset/resource module for .ico files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your custom HTML template
    }),
  ],
  devServer: {
    host: '0.0.0.0', // Bind to all interfaces (useful for EC2)
    port: 8081, // Port for development server
    static: path.resolve(__dirname, 'public'), // Serve static files from the 'public' folder
    open: false, // Optionally, prevent the browser from automatically opening
  },
};

const isDev = process.env.NODE_ENV === 'development'
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: ['echo "Webpack Start"'],
        blocking: true,
        parallel: false,
      },
      onBuildEnd: {
        scripts: ['echo "Webpack End"'],
        blocking: false,
        parallel: true,
      },
    }),
  ],
}

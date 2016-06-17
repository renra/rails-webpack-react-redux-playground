var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  context: __dirname,
  entry: './app/javascripts/redux_app.js',
  module: {
    loaders: [
      {
        key: 'js',
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
}

config.output = {
  path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  filename: 'bundle.js',
  publicPath: '/assets',
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
}

config.resolve = {
  extensions: ['', '.js'],
  modulesDirectories: [ 'node_modules' ] //, + 'bower_components' if necessary
};


// Only for bower
//config.plugins = [
//  new webpack.ResolverPlugin([
//    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
//  ])
//];


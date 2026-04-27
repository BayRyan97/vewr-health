const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url"),
    "vm": require.resolve("vm-browserify"),
    "process/browser": require.resolve("process/browser.js")
  });
  config.resolve.fallback = fallback;
  
  // Allow fully specified imports
  config.resolve.extensionAlias = {
    '.js': ['.js', '.ts', '.tsx']
  };
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]);
  
  config.ignoreWarnings = [/Failed to parse source map/];
  
  return config;
}

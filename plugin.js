const merge = require('webpack-merge');
const WebpackObfuscator = require('webpack-obfuscator');
exports.default = {
  config: function (cfg) {
    // Function to add obfuscator plugin to build steps
    const config = merge.merge(cfg, {
      plugins: [new WebpackObfuscator({
        optionsPreset: 'high-obfuscation',
        // you can add another options
      }, ['*', '!main*'])], // only main bundle getting obfuscated
    });
    return config;
  },
};

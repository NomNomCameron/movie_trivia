const { environment } = require('@rails/webpacker')
const webpack = require("webpack");

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery",
  // Tether: "tether",
  // "window.Tether": "tether",
  Popper: ['popper.js', 'default'],
  // "moment": "moment"
}));

module.exports = environment

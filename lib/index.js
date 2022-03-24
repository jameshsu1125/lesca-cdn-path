"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = exports.install = exports["default"] = exports.config = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var config = {
  enable: true
};
exports.config = config;
var hostname = window.location.hostname;
var messages = {
  unset: 'CDN path has not been set. Please use [install] to set it.'
};

var install = function install(path) {
  config.path = path;
};

exports.install = install;

var path = function path(relativePath) {
  var p = _typeof(relativePath) === 'object' ? relativePath["default"] : relativePath;

  if (!config.path) {
    console.log(messages.unset);
    return p;
  }

  if (!config.enable) return p;
  return false ? p : "".concat(config.path).concat(p.split('./').join('')); //hostname === 'localhost' || hostname.indexOf('github') > 0
};

exports.path = path;
var Path2CDN = {
  install: install,
  path: path,
  config: config
};
var _default = Path2CDN;
exports["default"] = _default;
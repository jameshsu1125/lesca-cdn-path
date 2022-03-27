"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = exports.install = exports["default"] = exports.config = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var config = {
  mode: 'cdn'
};
exports.config = config;
var messages = {
  unset: 'CDN path has not been installed. Please use [install] to set it up.'
};

var install = function install(path) {
  config.path = path;
};

exports.install = install;

var path = function path(relativePath) {
  var path = config.path,
      mode = config.mode;
  var p = _typeof(relativePath) === 'object' ? relativePath["default"] : relativePath;

  if (!path) {
    console.log("%c[lesca-cdn-path]%c".concat(messages.unset), 'color:#fff; background-color:#42a5f5;', 'color:#fff; background-color:#f57c00;');
    return p;
  }

  switch (mode) {
    default:
    case 'cdn':
      return "".concat(path).concat(p.split('./').join(''));

    case 'localhost':
      return p;
  } // ? hostname === 'localhost' || hostname.indexOf('github') > 0

};

exports.path = path;
var Path2CDN = {
  install: install,
  path: path,
  config: config
};
var _default = Path2CDN;
exports["default"] = _default;
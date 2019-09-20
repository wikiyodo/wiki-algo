"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Algorithm = function Algorithm() {
  var _this = this;

  _classCallCheck(this, Algorithm);

  _defineProperty(this, "defaultAlgorithm", String);

  _defineProperty(this, "algorithms", {});

  _defineProperty(this, "addChild", function (name, value) {
    if (!(value instanceof _this) || typeof name !== 'string') {
      throw new Exception("Invalid child has been passed");
      return;
    }

    _this[name] = value;
  });
};

exports["default"] = Algorithm;
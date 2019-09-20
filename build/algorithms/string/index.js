"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _substring = _interopRequireDefault(require("./substring"));

var _subsequence = _interopRequireDefault(require("./subsequence"));

var _sort = _interopRequireDefault(require("./sort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The index file in an algorithm suite returns all algorithm cases in it
 */
var _default = {
  subString: _substring["default"],
  subSequence: _subsequence["default"],
  sortString: _sort["default"]
};
exports["default"] = _default;
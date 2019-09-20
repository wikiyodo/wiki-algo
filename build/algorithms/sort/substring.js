"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eachAlgo = _interopRequireDefault(require("../each-algo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Substring =
/*#__PURE__*/
function (_Algorithm) {
  _inherits(Substring, _Algorithm);

  function Substring() {
    var _this;

    _classCallCheck(this, Substring);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Substring).call(this));

    _defineProperty(_assertThisInitialized(_this), "linearAlgorithm", function (str) {
      var result = [];

      for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
          result.push(str.slice(i, j));
        }
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "linearAlgorithmWithSubstring", function (str) {
      var result = [];

      for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
          result.push(str.substring(i, j));
        }
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "longest", function (str) {
      var longest = '';

      for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
          var current = str.slice(i, j);
          if (current.length > longest.length) longest = current;
        }
      }

      return longest;
    });

    _defineProperty(_assertThisInitialized(_this), "shortest", function (str) {
      var shortest = '';

      for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
          var current = str.slice(i, j);
          if (current.length < shortest.length) shortest = current;
        }
      }

      return shortest;
    });

    _this.defaultAlgorithm = _this.linearAlgorithm;
    _this.algorithms = {
      linearAlgorithm: _this.linearAlgorithm,
      linearAlgorithmWithSubstring: _this.linearAlgorithmWithSubstring,
      longest: _this.longest,
      shortest: _this.shortest
    };
    return _this;
  } // better to use slice than to use substring bcos of performance drawback


  return Substring;
}(_eachAlgo["default"]);

exports["default"] = Substring;
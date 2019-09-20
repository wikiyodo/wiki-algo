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

var Sort =
/*#__PURE__*/
function (_Algorithm) {
  _inherits(Sort, _Algorithm);

  function Sort() {
    var _this;

    _classCallCheck(this, Sort);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sort).call(this));

    _defineProperty(_assertThisInitialized(_this), "insertionSort", function (array) {
      for (var j = 1; j < array.length; j++) {
        var key = array[j];
        var i = j - 1;

        while (i >= 0 && array[i] > key) {
          array[i + 1] = array[i];
          i = i - 1;
        }

        array[i + 1] = key;
      }

      return array;
    });

    _this.insertionSort = _this.insertionSort;
    _this.algorithms = {
      insertionSort: _this.insertionSort
    };
    return _this;
  }

  return Sort;
}(_eachAlgo["default"]);

exports["default"] = Sort;
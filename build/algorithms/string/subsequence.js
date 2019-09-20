"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eachAlgo = _interopRequireDefault(require("../each-algo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubSequence =
/*#__PURE__*/
function (_Algorithm) {
  _inherits(SubSequence, _Algorithm);

  function SubSequence() {
    var _this;

    _classCallCheck(this, SubSequence);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubSequence).call(this));

    _defineProperty(_assertThisInitialized(_this), "linearAlgorithm", function (str, max) {
      var len = str.length,
          output,
          counter = 0,
          result = [];

      for (var i = 1; i < Math.pow(2, len); i++) {
        output = "";

        for (var j = 0; j < len; j++) {
          if (i & 1 << j) {
            if (!max || str[j].length <= max) output += str[j];
          }
        }

        counter++;
        result.push(output);
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "recursionAlgorithm", function (str, max) {
      var index = -1;
      var curr = "";
      return _this.printSubSeqRec(str, str.length, index, curr, max);
    });

    _this.defaultAlgorithm = _this.linearAlgorithm;
    _this.algorithms = {
      linearAlgorithm: _this.linearAlgorithm,
      recursionAlgorithm: _this.recursionAlgorithm
    };
    return _this;
  } // better to use slice than to use substring bcos of performance drawback
  // Time complexity O(n^3)


  _createClass(SubSequence, [{
    key: "printSubSeqRec",
    value: function printSubSeqRec(str, n, index, curr, max) {
      var result = []; // base case

      if (index == n) {
        return;
      }

      if (curr != "" && (!max || cur.length <= max)) result.push(curr);

      for (var i = index + 1; i < n; i++) {
        curr += str.charAt(i);
        var tempCur = this.printSubSeqRec(str, n, i, curr);
        result.push.apply(result, _toConsumableArray(tempCur)); // backtracking

        curr = curr.substring(0, curr.length - 1);
      }

      return result;
    }
  }]);

  return SubSequence;
}(_eachAlgo["default"]);

exports["default"] = SubSequence;
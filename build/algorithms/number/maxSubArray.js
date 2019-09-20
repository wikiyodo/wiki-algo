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

var maxSubArray =
/*#__PURE__*/
function (_Algorithm) {
  _inherits(maxSubArray, _Algorithm);

  function maxSubArray() {
    var _this;

    _classCallCheck(this, maxSubArray);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(maxSubArray).call(this));

    _defineProperty(_assertThisInitialized(_this), "divideAndConquer", function (array) {
      var _this$findMaximumSubA = _this.findMaximumSubArray(array, array.length - 1, 0),
          high = _this$findMaximumSubA.high,
          low = _this$findMaximumSubA.low,
          sum = _this$findMaximumSubA.sum;

      return array.splice(low, high - low + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "findMaximumSubArray", function (array, high, low) {
      if (high !== undefined && high === low) {
        return {
          low: low,
          high: high,
          sum: array[low]
        };
      }

      var mid = parseInt((low + high) / 2);

      var _this$findMaximumSubA2 = _this.findMaximumSubArray(array, mid, low),
          leftLow = _this$findMaximumSubA2.low,
          leftHigh = _this$findMaximumSubA2.high,
          leftSum = _this$findMaximumSubA2.sum;

      var _this$findMaximumSubA3 = _this.findMaximumSubArray(array, high, mid + 1),
          rightLow = _this$findMaximumSubA3.low,
          rightHigh = _this$findMaximumSubA3.high,
          rightSum = _this$findMaximumSubA3.sum;

      var _this$findMaxCrossing = _this.findMaxCrossingSubArray(array, low, mid, high),
          crossLow = _this$findMaxCrossing.maxLeft,
          crossHigh = _this$findMaxCrossing.maxRight,
          crossSum = _this$findMaxCrossing.sum;

      var diffLeft = leftHigh - leftLow;
      var diffRight = rightHigh - rightLow;
      var diffCross = crossHigh - crossLow;
      if (leftSum >= rightSum && leftSum >= crossSum) if (!(leftSum == rightSum && (diffLeft > diffRight || diffLeft > diffCross))) return {
        high: leftHigh,
        low: leftLow,
        sum: leftSum
      };
      if (rightSum >= leftSum && rightSum >= crossSum) if (!(leftSum == crossSum && diffRight > diffCross)) return {
        high: rightHigh,
        low: rightLow,
        sum: rightSum
      };
      return {
        high: crossHigh,
        low: crossLow,
        sum: crossSum
      };
    });

    _defineProperty(_assertThisInitialized(_this), "findMaxCrossingSubArray", function (array, low, mid, high) {
      var leftSum = Number.NEGATIVE_INFINITY,
          sum = 0,
          maxLeft = mid;

      for (var i = mid; i >= low; i--) {
        sum += array[i];

        if (sum > leftSum) {
          leftSum = sum;
          maxLeft = i;
        } else {
          break;
        }
      }

      var rightSum = array[mid + 1];
      sum = 0;
      var maxRight = mid;

      for (var j = mid + 1; j <= high; j++) {
        sum += array[j];

        if (sum >= rightSum) {
          rightSum = sum;
          maxRight = j;
        } else {
          break;
        }
      }

      return {
        maxLeft: maxLeft,
        maxRight: maxRight,
        sum: leftSum + rightSum
      };
    });

    _this.defaultAlgorithm = _this.divideAndConquer;
    _this.algorithms = {
      divideAndConquer: _this.divideAndConquer
    };
    return _this;
  }

  return maxSubArray;
}(_eachAlgo["default"]);

exports["default"] = maxSubArray;
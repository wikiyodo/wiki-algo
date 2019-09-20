"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Circle = function Circle() {
  var _this = this;

  _classCallCheck(this, Circle);

  _defineProperty(this, "distanceFromRadius", function (x, y, circle_x, circle_y, radius) {
    return Math.sqrt(Math.abs(circle_x - x) + Math.abs(circle_y - y));
  });

  _defineProperty(this, "pointExistsInCircle", function (x, y, circle_x, circle_y, radius) {
    var distance = _this.distanceFromRadius(x, y, circle_x, circle_y, radius);

    return distance < radius;
  });
};

exports["default"] = Circle;
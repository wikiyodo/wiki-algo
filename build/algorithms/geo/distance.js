"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var earthRadius = 6378.137;

var Distance = function Distance() {
  _classCallCheck(this, Distance);

  _defineProperty(this, "haversine", function ($location1, $location2) {
    $latitudeDistance = $location2.latitude * Math.PI / 180 - $location1.latitude * Math.PI / 180;
    $longitudeDistance = $location2.longitude * Math.PI / 180 - $location1.longitude * Math.PI / 180;
    $a = Math.sin($latitudeDistance / 2) * Math.sin($latitudeDistance / 2) + Math.cos($location1.latitude * Math.PI / 180) * Math.cos($location1.latitude * Math.PI / 180) * Math.sin($longitudeDistance / 2) * Math.sin($latitudeDistance / 2);
    $c = 2 * Math.atan2(Math.sqrt($a), Math.sqrt(1 - $a));
    return $earthRadius * $c;
  });
};

exports["default"] = Distance;
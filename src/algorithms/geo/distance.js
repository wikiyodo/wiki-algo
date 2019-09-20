import Algorithm from "../each-algo";

const earthRadius = 6378.137;

export default class Distance extends Algorithm {
  constructor() {
    super();
    this.defaultAlgorithm = this.haversine;
    this.algorithms = {
      haversine: this.haversine
    };
  }
  /**
   * This uses Haversine formula to calculate the distance between two locations on the earth
   * and its the default
   */

  haversine = ($location1, $location2) => {
    const $latitudeDistance =
      ($location2.latitude * Math.PI) / 180 -
      ($location1.latitude * Math.PI) / 180;
    const $longitudeDistance =
      ($location2.longitude * Math.PI) / 180 -
      ($location1.longitude * Math.PI) / 180;
    const $a =
      Math.sin($latitudeDistance / 2) * Math.sin($latitudeDistance / 2) +
      Math.cos(($location1.latitude * Math.PI) / 180) *
        Math.cos(($location1.latitude * Math.PI) / 180) *
        Math.sin($longitudeDistance / 2) *
        Math.sin($latitudeDistance / 2);

    const $c = 2 * Math.atan2(Math.sqrt($a), Math.sqrt(1 - $a));

    return earthRadius * $c;
  };
}

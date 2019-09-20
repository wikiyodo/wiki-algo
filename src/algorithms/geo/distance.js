const earthRadius = 6378.137;

export default class Distance {
  /**
   * This uses Haversine formula to calculate the distance between two locations on the earth
   * and its the default
   */

  haversine = ($location1, $location2) => {
    $latitudeDistance =
      ($location2.latitude * Math.PI) / 180 -
      ($location1.latitude * Math.PI) / 180;
    $longitudeDistance =
      ($location2.longitude * Math.PI) / 180 -
      ($location1.longitude * Math.PI) / 180;

    $a =
      Math.sin($latitudeDistance / 2) * Math.sin($latitudeDistance / 2) +
      Math.cos(($location1.latitude * Math.PI) / 180) *
        Math.cos(($location1.latitude * Math.PI) / 180) *
        Math.sin($longitudeDistance / 2) *
        Math.sin($latitudeDistance / 2);

    $c = 2 * Math.atan2(Math.sqrt($a), Math.sqrt(1 - $a));

    return $earthRadius * $c;
  };
}

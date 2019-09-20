import Algorithm from "../each-algo";

export default class Circle extends Algorithm {
  constructor() {
    super();
    this.defaultAlgorithm = this.pointExistsInCircle;
    this.algorithms = {
      pointExistsInCircle: this.pointExistsInCircle,
      distanceFromRadius: this.distanceFromRadius
    };
  }
  /**
   * This uses d^2 = |X1 - X2| +|Y1 - Y2|
   */
  distanceFromRadius = (x, y, circle_x, circle_y, radius) => {
    return Math.sqrt(Math.abs(circle_x - x) + Math.abs(circle_y - y));
  };

  pointExistsInCircle = (x, y, circle_x, circle_y, radius) => {
    let distance = this.distanceFromRadius(x, y, circle_x, circle_y, radius);
    return distance < radius;
  };
}

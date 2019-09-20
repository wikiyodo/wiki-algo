import regeneratorRuntime from "regenerator-runtime";
import Circle from "../../../src/algorithms/geo/circle";
import Solve, { algorithms, disableValidation } from "../../../src";

describe("Circle(): ", () => {
  test("distanceFromRadius algorithm is properly processed:", async () => {
    const circle = new Circle();
    const dist = circle.distanceFromRadius;
    expect(dist(2, 3, 4, 5, 5)).toBe(2);
  });

  test("pointExistsInCircle algorithm is properly processed:", async () => {
    const circle = new Circle();
    const check = circle.pointExistsInCircle;
    expect(check(2, 5, 4, 5, 2)).toBe(true);
    expect(check(2, 5, 4, 19, 2)).toBe(false);
  });
});

describe("Circle Algo():", () => {
  test("distanceFromRadius algorithm to be accessible with callback", async () => {
    expect.assertions(2);

    let callback = (err, res) => {
      expect(err).toBe(null);
      expect(res).toBe(4);
    };

    await Solve(
      [algorithms.geoCircle, "distanceFromRadius"],
      2,
      5,
      4,
      19,
      2,
      callback
    );
  });

  test("distanceFromRadius algorithm to be accessible without callback", async () => {
    expect.assertions(1);

    try {
      const res = await Solve(
        [algorithms.geoCircle, "distanceFromRadius"],
        2,
        5,
        4,
        19,
        2
      );
      expect(res).toBe(4);
    } catch (err) {
      console.log(err);
      expect(err).toBe(null);
    }
  });

  test("pointExistsInCircle algorithm to be accessible with callback", async () => {
    expect.assertions(2);

    let callback = (err, res) => {
      expect(err).toBe(null);
      expect(res).toBe(false);
    };

    await Solve(
      [algorithms.geoCircle, "pointExistsInCircle"],
      2,
      5,
      4,
      19,
      2,
      callback
    );
  });

  test("pointExistsInCircle algorithm to be accessible without callback", async () => {
    try {
      const res = await Solve(
        [algorithms.geoCircle, "pointExistsInCircle"],
        2,
        5,
        4,
        19,
        2
      );
      expect(res).toBe(false);
    } catch (err) {
      console.log(err);
      expect(err).toBe(null);
    }
  });
});

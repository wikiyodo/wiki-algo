import regeneratorRuntime from "regenerator-runtime";
import DistanceWrapper from "../../../src/algorithms/geo";

describe("Distance(): ", () => {
  const allGeoAlgorithms = ["geoDistance", "geoCircle"];
  test("contain all algorithms:", async () => {
    expect(allGeoAlgorithms).toEqual(
      expect.arrayContaining(Object.keys(DistanceWrapper))
    );

    for (let algo of Object.keys(DistanceWrapper)) {
      expect(DistanceWrapper[algo] instanceof Object).toBe(true);
    }
  });
});

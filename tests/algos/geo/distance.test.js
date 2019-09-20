import regeneratorRuntime from "regenerator-runtime";
import Distance from "../../../src/algorithms/geo/distance";
import Solve, { algorithms, disableValidation } from "../../../src";

describe("Distance(): ", () => {
  test("haversine algorithm is properly processed:", async () => {
    const circle = new Distance();
    const haversine = circle.haversine;
    expect(
      haversine(
        {
          latitude: 20.212,
          longitude: 10.212
        },
        {
          latitude: 20.212,
          longitude: 10.212
        }
      )
    ).toBe(0);

    expect(
      haversine(
        {
          latitude: 20.212,
          longitude: 10.212
        },
        {
          latitude: 21.212,
          longitude: 10.212
        }
      )
    ).toBe(111.31949079327336);
  });
});

describe("Distance Algo():", () => {
  test("haversine algorithm to be accessible with callback", async () => {
    expect.assertions(2);

    let callback = (err, res) => {
      expect(err).toBe(null);
      expect(res).toBe(111.31949079327336);
    };

    await Solve(
      [algorithms.geoDistance, "haversine"],
      {
        latitude: 20.212,
        longitude: 10.212
      },
      {
        latitude: 21.212,
        longitude: 10.212
      },
      callback
    );
  });

  test("haversine algorithm to be accessible without callback", async () => {
    try {
      const res = await Solve(
        [algorithms.geoDistance, "haversine"],
        {
          latitude: 20.212,
          longitude: 10.212
        },
        {
          latitude: 20.212,
          longitude: 10.212
        }
      );
      expect(res).toBe(0);
    } catch (err) {
      expect(err).toBe(null);
    }
  });

  test("haversine algorithm to be accessible by default", async () => {
    try {
      const res = await Solve(
        algorithms.geoDistance,
        {
          latitude: 20.212,
          longitude: 10.212
        },
        {
          latitude: 20.212,
          longitude: 10.212
        }
      );
      expect(res).toBe(0);
    } catch (err) {
      expect(err).toBe(null);
    }
  });
});

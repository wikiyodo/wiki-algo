/**
 * This host all alorithms present
 */

import Algorithm from "./algorithms/each-algo";
import StringAlgos from "./algorithms/string";
import NumberAlgos from "./algorithms/number";
import GeoAlgos from "./algorithms/geo";

let algorithms = { ...StringAlgos, ...NumberAlgos, ...GeoAlgos };

/**
 * All algorithms must be of the object Algorithm
 *
 */
export default algorithms;

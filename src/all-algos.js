/**
 * This host all alorithms present
 */

import Algorithm from './algorithms/each-algo';
import StringAlgos from './algorithms/string/index'
import NumberAlgos from './algorithms/number/index'

let algorithms = {...StringAlgos, ...NumberAlgos};

/**
 * All algorithms must be of the object Algorithm
 * 
 */
export default algorithms;
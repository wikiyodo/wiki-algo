import algorithms_ from "./all-algos";
import Algorithm from "./algorithms/each-algo";
import Processor from "./process-algo";
import processAlgo from "./process-algo";

// by default the validation is always on
// true : validation should be done
// false: validation should not be done
let validation = true;

const validateAlgo = algorithm_ => {
  let algorithm;

  if (algorithm_ instanceof Array && algorithm_.length > 1) {
    algorithm = algorithm_[0];
    let manualAlgo = algorithm_[1];
    if (typeof manualAlgo !== "string") {
      throw new Error("The specified algorithm does not exist");
      return false;
    }
  } else {
    algorithm = algorithm_;
  }

  // confirm that the first argument is an object of Algorithm
  if (!(algorithm instanceof Object)) {
    throw new Error("The specified algorithm does not exist");
    return false;
  }
  return true;
};

const validateArguments = argument => {
  if (!(argument instanceof Object)) {
    throw new Error(
      "Invalid arguments passed, please follow the instructions placed in the documentation"
    );
    return false;
  }

  if (argument.length < 3) {
    throw new Error(
      "Invalid arguments passed, the algorithm, parameter and callback must be passed."
    );
    return false;
  }

  // validate the algorithm spec by the user
  let valAlgo = validateAlgo(argument[0]);
  if (!valAlgo) return valAlgo;

  // check that the last argument is a callback
  // if (typeof argument[argument.length - 1] !== "function") {
  //   throw new Error("Your last argument must be a callback");
  //   return false;
  // }
  return true;
};

export default async (...args) => {
  // the minimum argument to be passed is three
  if (!validation || validateArguments(args)) {
    // then pass the arguments to the request processor
    // also pass the validation status to tell the processor not to do any validation
    return processAlgo(args, validation);
  }
};

// op
export const algorithms = algorithms_;

export function disableValidation() {
  validation = false;
}
export function enableValidation() {
  validation = true;
}

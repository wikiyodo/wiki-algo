"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.disableValidation = disableValidation;
exports.enableValidation = enableValidation;
exports.algorithms = void 0;

var _allAlgos = _interopRequireDefault(require("./all-algos"));

var _eachAlgo = _interopRequireDefault(require("./algorithms/each-algo"));

var _processAlgo = _interopRequireDefault(require("./process-algo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// by default the validation is always on
// true : validation should be done
// false: validation should not be done
var validation = true;

var validateAlgo = function validateAlgo(algorithm_) {
  var algorithm;

  if (algorithm_ instanceof Array && algorithm_.length > 1) {
    algorithm = algorithm_[0];
    var manualAlgo = algorithm_[1];

    if (typeof manualAlgo !== 'string') {
      throw new Error("The specified algorithm does not exist");
      return false;
    }
  } else {
    algorithm = algorithm_;
  } // confirm that the first argument is an object of Algorithm


  if (!(algorithm instanceof Object)) {
    throw new Error("The specified algorithm does not exist");
    return false;
  }

  return true;
};

var validateArguments = function validateArguments(argument) {
  if (!(argument instanceof Object)) {
    throw new Error("Invalid arguments passed, please follow the instructions placed in the documentation");
    return false;
  }

  if (argument.length < 3) {
    throw new Error("Invalid arguments passed, the algorithm, parameter and callback must be passed.");
    return false;
  } // validate the algorithm spec by the user


  var valAlgo = validateAlgo(argument[0]);
  if (!valAlgo) return valAlgo; // check that the last argument is a callback

  if (typeof argument[argument.length - 1] !== 'function') {
    throw new Error("Your last argument must be a callback");
    return false;
  }

  return true;
};

function _default(algorithm, parameter, callback) {
  // the minimum argument to be passed is three
  if (!validation || validateArguments(arguments)) {
    // then pass the arguments to the request processor
    // also pass the validation status to tell the processor not to do any validation
    (0, _processAlgo["default"])(arguments, validation);
  }
}

; // op

var algorithms = _allAlgos["default"];
exports.algorithms = algorithms;

function disableValidation() {
  validation = false;
}

;

function enableValidation() {
  validation = true;
}

;
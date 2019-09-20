"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// the first thing is to get the algorithm
var _default = function _default(args, validation) {
  // the args are expected to be an array
  var algorithm = args[0];
  var callback = args[args.length - 1];
  delete args[0];
  delete args[args.length - 1];
  var parameters = [];
  Object.keys(args).forEach(function (key) {
    if (args[key] !== undefined) {
      parameters.push(args[key]);
    }
  }); // it is assumed that all neccessary validations have being done before 

  var algoCallback; // ...this function is called

  if (algorithm instanceof Array) {
    // 
    var algorithmSuite = algorithm[0];
    var specifiedAlgo = algorithm[1];
    algoCallback = new algorithmSuite()[specifiedAlgo];
  } else {
    algoCallback = new algorithm().defaultAlgorithm;
  }

  if (typeof algoCallback !== 'function') {
    throw new Error("The specified algorithm does not exist might have been removed.");
    return;
  }

  var result, err;

  try {
    result = algoCallback.apply(void 0, parameters);
  } catch (error) {
    err = error;
  }

  callback(err, result);
};

exports["default"] = _default;
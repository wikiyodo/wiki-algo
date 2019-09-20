// the first thing is to get the algorithm
export default (args, validation) => {
  // the args are expected to be an array
  let algorithm = args[0];
  delete args[0];

  let callback = args[args.length - 1];
  if (typeof callback == "function") {
    delete args[args.length - 1];
  } else {
    callback = undefined;
  }
  let parameters = [];

  Object.keys(args).forEach(key => {
    if (args[key] !== undefined) {
      parameters.push(args[key]);
    }
  });

  // it is assumed that all neccessary validations have being done before
  let algoCallback;
  // ...this function is called
  if (algorithm instanceof Array) {
    //
    let algorithmSuite = algorithm[0];
    let specifiedAlgo = algorithm[1];

    algoCallback = new algorithmSuite()[specifiedAlgo];
  } else {
    algoCallback = new algorithm().defaultAlgorithm;
  }

  if (typeof algoCallback !== "function") {
    throw new Error(
      "The specified algorithm does not exist might have been removed."
    );
    return;
  }

  let result,
    err = null;

  try {
    result = algoCallback(...parameters);
  } catch (error) {
    err = error;
  }
  if (callback) callback(err, result);
  else {
    if (err) throw err;
    return result;
  }
};

import Algorithm from "../each-algo";

export default class Substring extends Algorithm {
  constructor() {
    super();
    this.defaultAlgorithm = this.linearAlgorithm;
    this.algorithms = {
      linearAlgorithm: this.linearAlgorithm,
      linearAlgorithmWithSubstring: this.linearAlgorithmWithSubstring,
      longest: this.longest,
      shortest: this.shortest
    };
  }
  // better to use slice than to use substring bcos of performance drawback
  linearAlgorithm = str => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result;
  };

  linearAlgorithmWithSubstring = str => {
    let result = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        result.push(str.substring(i, j));
      }
    }
    return result;
  };

  /**
   *  This computes the longest substring
   */

  longest = str => {
    let longest = "";

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let current = str.slice(i, j);
        if (current.length > longest.length) longest = current;
      }
    }
    return longest;
  };

  shortest = str => {
    let shortest = "";

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let current = str.slice(i, j);
        if (current.length < shortest.length) shortest = current;
      }
    }
    return shortest;
  };
}

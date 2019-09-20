import Algorithm from "../each-algo";

export default class SubSequence extends Algorithm {
  constructor() {
    super();
    this.defaultAlgorithm = this.linearAlgorithm;
    this.algorithms = {
      linearAlgorithm: this.linearAlgorithm,
      recursionAlgorithm: this.recursionAlgorithm
    };
  }

  // better to use slice than to use substring bcos of performance drawback
  // Time complexity O(n^3)
  linearAlgorithm = (str, max) => {
    let len = str.length,
      output,
      counter = 0,
      result = [];
    for (let i = 1; i < Math.pow(2, len); i++) {
      output = "";
      for (let j = 0; j < len; j++) {
        if (i & (1 << j)) {
          if (!max || str[j].length <= max) output += str[j];
        }
      }
      counter++;
      result.push(output);
    }

    return result;
  };

  printSubSeqRec(str, n, index, curr, max) {
    let result = [];
    // base case
    if (index == n) {
      return;
    }
    if (curr != "" && (!max || cur.length <= max)) result.push(curr);

    for (let i = index + 1; i < n; i++) {
      curr += str.charAt(i);
      let tempCur = this.printSubSeqRec(str, n, i, curr);
      result.push(...tempCur);
      // backtracking
      curr = curr.substring(0, curr.length - 1);
    }

    return result;
  }

  recursionAlgorithm = (str, max) => {
    let index = -1;
    let curr = "";

    return this.printSubSeqRec(str, str.length, index, curr, max);
  };
}

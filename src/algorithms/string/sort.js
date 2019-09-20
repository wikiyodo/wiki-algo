import Algorithm from "../each-algo";

export default class Sort extends Algorithm {
  constructor() {
    super();
    this.insertionSort = this.insertionSort;
    this.algorithms = {
      insertionSort: this.insertionSort,
    };
  }

  insertionSort = array => {
    for (let j = 1; j < array.length; j++) {
      let key = array[j];
      let i = j - 1;
      while (i >= 0 && array[i] > key) {
        array[i + 1] = array[i];
        i = i - 1;
      }

      array[i + 1] = key;
    }
    return array;
  };
}

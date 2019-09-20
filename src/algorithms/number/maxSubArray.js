import Algorithm from "../each-algo";

export default class maxSubArray extends Algorithm {
  constructor() {
    super();
    this.defaultAlgorithm = this.divideAndConquer;
    this.algorithms = {
      divideAndConquer: this.divideAndConquer
    };
  }

  divideAndConquer = array => {
    let { high, low, sum } = this.findMaximumSubArray(
      array,
      array.length - 1,
      0
    );
    return array.splice(low, high - low + 1);
  };

  findMaximumSubArray = (array, high, low) => {
    if (high !== undefined && high === low) {
      return { low, high, sum: array[low] };
    }

    let mid = parseInt((low + high) / 2);
    let {
      low: leftLow,
      high: leftHigh,
      sum: leftSum
    } = this.findMaximumSubArray(array, mid, low);
    let {
      low: rightLow,
      high: rightHigh,
      sum: rightSum
    } = this.findMaximumSubArray(array, high, mid + 1);

    let {
      maxLeft: crossLow,
      maxRight: crossHigh,
      sum: crossSum
    } = this.findMaxCrossingSubArray(array, low, mid, high);
    let diffLeft = leftHigh - leftLow;
    let diffRight = rightHigh - rightLow;
    let diffCross = crossHigh - crossLow;

    if (leftSum >= rightSum && leftSum >= crossSum)
      if (
        !(leftSum == rightSum && (diffLeft > diffRight || diffLeft > diffCross))
      )
        return { high: leftHigh, low: leftLow, sum: leftSum };
    if (rightSum >= leftSum && rightSum >= crossSum)
      if (!(leftSum == crossSum && diffRight > diffCross))
        return { high: rightHigh, low: rightLow, sum: rightSum };

    return { high: crossHigh, low: crossLow, sum: crossSum };
  };

  findMaxCrossingSubArray = (array, low, mid, high) => {
    let leftSum = Number.NEGATIVE_INFINITY,
      sum = 0,
      maxLeft = mid;

    for (let i = mid; i >= low; i--) {
      sum += array[i];
      if (sum > leftSum) {
        leftSum = sum;
        maxLeft = i;
      } else {
        break;
      }
    }

    let rightSum = array[mid + 1];
    sum = 0;
    let maxRight = mid;

    for (let j = mid + 1; j <= high; j++) {
      sum += array[j];

      if (sum >= rightSum) {
        rightSum = sum;
        maxRight = j;
      } else {
        break;
      }
    }

    return { maxLeft, maxRight, sum: leftSum + rightSum };
  };
}

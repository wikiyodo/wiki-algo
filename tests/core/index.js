const algo = require("../../build/index");
const { algorithms, disableValidation } = algo;
const Solve = algo.default;
disableValidation();
// console.time("wiki");
// Solve([algorithms.subSequence,'linearAlgorithm'], "12345678ufdjsdfsfsdfsdf", 3, (err, res) => {
//   console.timeEnd("wiki");
//   console.log(res);
// });

let array = [20, -1, 40, 3, 100, -4, -1, 4, 1, -1, 4, -16, 300, 4, 234, 234, 234, 5, 34];
for (let i = 0; i < 1000000000; i++) {
    let no = parseInt(Math.random() * 1000);
    if (parseInt(Math.random() * 10) % 2 == 0)
        no *= -1;
    array.push(no);
}
console.log(array);
console.time("wiki");
Solve(algorithms.maxSubArray, array, (err, res) => {
    console.timeEnd("wiki");
    console.log(err, res);
});
/*
* PROJECT: ts-project-12-05-2021
* DESCRIPTION: Given a two-dimensional array, flatten it, sort the flattened array and return it.
* AUTHOR: Vahin Sharma
*/

function flattenAndSort(inputArray: number[][]): number[] {
  let flattenedArray: Array<number> = [];
  inputArray.forEach(block => block.forEach(num => flattenedArray.push(num)));
  return flattenedArray.sort((a, b) => a - b);
}

const tests = {
  "[[3, 2, 1], [7, 9, 8], [6, 4, 5]]": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "[[1, 3, 5], [100], [2, 4, 6]]": [1, 2, 3, 4, 5, 6, 100],
  "[[-9, -8, -7, -6, -5, -4, -3, -2, -1]]": [-9, -8, -7, -6, -5, -4, -3, -2, -1],
  
  "[[], [], [64], [], [504, 503], [4096], [], [303], [202], [2500], [], [100]]": [64, 100, 202, 303, 503, 504, 2500, 4096],
  "[[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]]": [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  "[[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]]": [0, 18, 27, 35, 46, 54, 63, 72, 81, 90]
}

let marks: number = 0;

for (const question in tests) {
  const answer = flattenAndSort(JSON.parse(question));
  
  console.log(`Input: ${question}`)
  console.log(`Output: ${answer}`)
  
  if (JSON.stringify(answer) == JSON.stringify(tests[question])) {
    console.log("Passed");
    ++marks;
  } else {
    console.log(`Expected '${tests[question]}', instead got '${answer}'`);
  }
  
  console.log()
}

console.log(`Score: ${marks} out of ${Object.keys(tests).length}`);

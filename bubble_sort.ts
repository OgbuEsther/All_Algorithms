console.time();
const BubbleSort2 = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // console.log(arr, arr[i], arr[j]);
        let data = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = data;
      }
    }
  }
  return arr;
};

const testdata2: number[] = [];
Array.apply(null, { length: 3000 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 1000);
    testdata2.push(el);
  }
});
console.log(BubbleSort2(testdata2));

console.timeLog();

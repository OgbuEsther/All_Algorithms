import { Console } from "console";

//merge sort allows us to
Console;
console.time();
const merge = (arr1: number[], arr2: number[]) => {
  let result: number[] = [];

  let x: number = 0;
  let y: number = 0;

  while (x < arr1.length && y < arr2.length) {
    if (arr2[y] > arr1[x]) {
      result.push(arr1[x]);
      x++;
    } else {
      result.push(arr2[y]);
      y++;
    }
  }

  while (x < arr1.length) {
    result.push(arr1[x]);
    x++;
  }
  while (y < arr2.length) {
    result.push(arr2[y]);
    y++;
  }

  return result;
};

const OurSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid: number = Math.floor(arr.length / 2);
  let left = OurSort(arr.slice(0, mid));
  let right = OurSort(arr.slice(mid));

  return merge(left, right);
};

const testdata: number[] = [];
Array.apply(null, { length: 3000 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 1000);
    testdata.push(el);
  }
});
// console.log(testdata);

console.log(merge([1, 3, 0], [7, 2, 9]));
console.log(OurSort(testdata));

console.timeLog();

const Binary = (arr: number[], value: number) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  console.log("start :", start, end, mid);

  while (value !== arr[mid] && start < end) {
    console.log("loop :", start, end, mid);
    if (value < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  console.log("finish :", start, end, mid);

  if (value === arr[mid]) {
    return mid;
  } else {
    return -1;
  }
};

// console.log(Binary([1, 2, 3, 4, 5, 6], 16));

const RecursiveMethod = (arr: number[], value: number) => {
  let midValue = Math.floor(arr.length / 2);
  let mid = arr[midValue];

  if (value === mid) {
    return true;
  } else if (value < mid && arr.length > 1) {
    return RecursiveMethod(arr.splice(0, midValue), value);
  } else if (value > mid && arr.length > 1) {
    return RecursiveMethod(arr.splice(midValue, arr.length), value);
  }
  return false;
};
// console.log(RecursiveMethod([11, 30, 2, 1, 5], 4));
//this only works on sorted data

//NAIVE SEARCH
const NaiveSearch = (words: string, val: string) => {
  let store = 0;
  words = words.toLowerCase();
  val = val.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < val.length; j++) {
      // console.log(words[i], val[j]);
      // console.log(i, j);

      if (val[j] !== words[i + j]) {
        // console.log("not found");
        break;
      } else if (j === val.length - 1) {
        store++;
      }
    }
  }

  return store;
};
console.log(
  NaiveSearch(
    "every race is important whether black or white , be it a negro or whatever . we are all important ",
    "nigga"
  )
);

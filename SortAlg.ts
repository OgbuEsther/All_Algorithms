// console.time("start1 :");
const SwapData = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        // console.log(arr, arr[i], arr[j]);
        let data = arr[i];
        arr[i] = arr[j];
        arr[j] = data;
      }
    }
  }
  return arr;
};
console.log(SwapData([4, 1, 7, 8, 3, 5]));
// console.timeLog("first:");

// console.time("start2 : ");
const BubbleSort = (arr: number[]) => {
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
console.log(BubbleSort([4, 1, 7, 8, 3, 5]));
// console.timeLog("end:");
// console.timeEnd("end2: ");

// ALOGORITHM FOR PRIME NUMBERS

// const primeNums = (n: number) => {
//   if (n === 1) {
//     console.log("1 is neither a prime number or a composite num");
//   } else if (n > 1) {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//       }
//     }
//     console.log("is a prime number");
//   } else {
//     console.log("not a prime ");
//   }
// };
// console.log(primeNums(22));

const primes = (n: number) => {
  if (n === 1) {
    console.log("okayyyyy");
  } else if (n === 2) {
    console.log("one down");
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        console.log("not a prime");
      } else if (n % x !== 0) {
        console.log("a prime found");
      }
    }
    // console.log("a prime found");
    // return true;
  }
};
// console.log(primes(13));

const SumUp = (arr: number[], value: number) => {
  let res: number[][] = [];
  let hashTable: number[] = [];

  for (let x = 0; x <= arr.length; x++) {
    let currentNum: number = arr[x];
    let counterPart: number = value - arr[x];

    if (hashTable.indexOf(counterPart) > -1) {
      res.push([currentNum, counterPart]);
    } else {
      hashTable.push(currentNum);
    }
  }

  return res;
};
console.log(SumUp([1, 2, 3, 4], 5));

// const PairUp = (arr: number[], val: number) => {
//   let result: number[][] = []
//   let hashTable: number[] = []

//   for (let y = 0; y <= arr.length; y++){
//     let recentNum: number = arr[y]
//     let count : number = val - arr[y]
//   }
// }

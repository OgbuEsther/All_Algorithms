// for (let x = 0; x < 3; x++) {
//   console.log(x);
// }

// const data = (n: number) => {
//   for (let x = 0; x < n; x++) {
//     if (x === 3) {
//       console.log("found");
//     } else {
//       console.log(x);
//     }
//   }
// };
// data(10);

import fs from "fs";
import path from "path";

// fs.readdir(path.join(__dirname, "img"), (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   data.forEach((el) => {
//     if (el === "2.JPG") {
//       console.log("found");
//     } else {
//       console.log(el);
//     }
//   });
// });

// const point = (n: number) => {
//   outer: for (let x = 0; x <= n; x++) {
//     for (let y = n; y >= 0; y--) {
//       // console.log(x, y);
//       if (x === 2 && y === 3) {
//         console.log("found");
//         break outer;
//       } else {
//         console.log(x, y);
//       }
//     }
//   }
// };
// point(6);

//FIZZBUZZ ALGORITHM : WATCH THINK LIKE A CODER

// const pointer = (n: number) => {
//   let result: number;
//   outer: for (let x = 0; x <= n; x++) {
//     for (let y = n; y >= 0; y--) {
//       result = x * y;
//       console.log(`the multiple of x: ${x} and y: ${y} is : ${result}`);

//       if (result % 3 === 0) {
//         console.log("FIZZ");
//         if (result % 5 === 0) {
//           console.log("BUZZ");
//         }
//         if (result % 3 === 0 && result % 5 === 0) {
//           console.log("FIZZ BUZZ");
//         }
//       } else {
//         console.log(x, y);
//       }
//     }
//   }
// };
// pointer(6);

// const fizzbuzz = (e: number) => {
//   let result: number;
//   for (let x = 0; x <= e; x++) {
//     for (let y = e; y >= 0; y--) {
//       result = x * y;
//       console.log(`the multiple of ${x} and ${y} is ${result}`);

//       if (result % 3 === 0 && result % 5 === 0) {
//         console.log("FIZZ BUZZ");
//       } else if (result % 3 === 0) {
//         console.log("FIZZ");
//       } else if (result % 5 === 0) {
//         console.log("BUZZ");
//       }
//     }
//   }
// };

// fizzbuzz(6);
// let arrData: string[] = ["apple", "pawpaw", "orange", "pineapple", "banana"];
// // let value: number = Math.floor(Math.random() * arrData.length);
// // console.log(arrData[value]);
// let tray: string[] = [];
// for (let x = 0; x < 3; x++) {
//   let value: number = Math.floor(Math.random() * arrData.length);
//   // console.log(arrData[value]);
//   tray.push(arrData[value]);
// }
// console.log(tray);

import prompt from "prompt-sync";
const promptData = prompt();
const stakes = (basket: string[]) => {
  console.log("pick from this basket ", basket);
  let served: string[] = [];
  let predict: string[] = [];

  for (let x = 1; x <= 3; x++) {
    let value: number = Math.floor(Math.random() * basket.length);
    served.push(basket[value]);
  }
  for (let x = 1; x <= 3; x++) {
    let value: string = promptData(` your ${x} prediction is : `);
    predict.push(value);
  }
  console.log(served, predict);

  let arr: boolean[] = [];
  served.forEach((el) => {
    predict.some((props) => {
      arr.push(el === props);
    });
  });
  // console.log(arr);

  let res = arr.filter((el) => el === true).length;
  if (res >= 2) {
    console.log("well done .....!!");
  } else {
    console.log("try again !!");
  }
};

let fruits: string[] = [
  "pawpaw",
  "guava",
  "apple",
  "mango",
  "strawberry",
  "orange",
  "grape",
  "banana",
  "black berry",
];
// stakes(fruits);

const findData = (arr: number[], value: number) => {
  arr.findIndex((el) => el === value);
};

let datax: number[] = [1, 2, 3, 4, 5, 7];

console.log(findData(datax, 8));

console.log("hello");

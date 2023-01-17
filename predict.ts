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
// const prompt = require("prompt-sync")();

const predict = (n: string[]) => {
  let tray: string[] = [];
  for (let x = 0; x < 3; x++) {
    let value = Math.floor(Math.random() * n.length);
    tray.push(n[value]);
  }
  const ps = prompt();
  console.log("guess the fruit on our mind");
  let predict1 = ps("Enter your first prediction :");
  console.log("");
  let predict2 = ps("Enter your second prediction :");
  console.log("");
  let predict3 = ps("Enter your third prediction :");
  console.log("");

  let firstCheck = tray.includes(predict1);
  let secondCheck = tray.includes(predict2);
  let thirdCheck = tray.includes(predict3);

  if (firstCheck && secondCheck && thirdCheck) {
    console.log(
      `well ${tray.map((el) => {
        return el;
      })}`
    );
  } else if (firstCheck && !secondCheck && !thirdCheck) {
    console.log(
      `your firstcheck was the only one you got and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  } else if (!firstCheck && secondCheck && !thirdCheck) {
    console.log(
      `your secondcheck was the only one you got and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  } else if (!firstCheck && !secondCheck && thirdCheck) {
    console.log(
      `your thirdCheck was the only one you got and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  } else if (!firstCheck && !secondCheck && !thirdCheck) {
    console.log(
      `you didn't get any and the computer predicted ${tray.map((el) => {
        return el;
      })}`
    );
  } else if (!firstCheck && secondCheck && thirdCheck) {
    console.log(
      `you got two correctly , your secondcheck and thirdCheck were correct and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  } else if (firstCheck && !secondCheck && thirdCheck) {
    console.log(
      ` you got two correctly ,your firstCheck  and thirdCheck were correct and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  } else if (firstCheck && secondCheck && !thirdCheck) {
    console.log(
      `you got two correctly , your firstCheck and secondCheck were correct and the computer predicted ${tray.map(
        (el) => {
          return el;
        }
      )}`
    );
  }
};

predict([
  "apple",
  "pineapple",
  "mango",
  "orange",
  "guava",
  "banana",
  "paw paw",
]);

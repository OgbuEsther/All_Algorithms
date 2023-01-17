const isPanlidrome = (word: string) => {
  word = word.toLowerCase();
  let newWord: string[] = word.split("");

  let alpha: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  let beta: string[] = [];

  newWord.forEach((el) => {
    if (alpha.indexOf(el) > -1) {
      beta.push(el);
    }
  });
  console.log(newWord);
  console.log(beta);
  let result = beta.join("");
  let result2 = beta.reverse().join("");

  console.log(result2, result);
  if (result === result2) {
    return true;
  } else {
    return false;
  }
};
console.log(isPanlidrome("hannah"));

const reverser = (x: number[]) => {
  for (let i = 0; i < x.length / 2; i++) {
    let res = x[i];
    x[i] = x[x.length - 1 - i];
    x[x.length - 1 - i] = res;
    //   console.log(i)
  }
  // console.log(i);
  return x;

  //   for (let i in x) {
  //     let res = x[i];
  //     x[i] = x[x.length - 1];
  //     x[x.length - 1] = res;
  //     // console.log(i);
  //   }
};

console.log(reverser([1, 2, 3, 4, 2]));

const testdata: number[] = [];
Array.apply(null, { length: 100 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 100);
    testdata.push(el);
  }
});

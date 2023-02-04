function hof(n) {
  let temporarya = "";
  let combinedsequence = [1, 2, 3, 4];
  let maximum = "";
  sequencea = [1, 3];
  sequenceb = [2, 4];
  for (i = 1; i < Infinity; i++) {
    temporarya = sequencea[i] + sequenceb[i];
    sequencea.push(temporarya);
    combinedsequence.push(temporarya);
    maximum = combinedsequence.sort((a, b) => a - b)[
      combinedsequence.length - 1
    ];
    for (let k = 1; k < maximum; k++) {
      if (!combinedsequence.includes(k)) {
        combinedsequence.push(k);
        sequenceb.push(k);
      }
    }
    console.log(sequencea);
    console.log(sequenceb);
  }
}
hof(2);

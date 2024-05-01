"strict mode";
const resultConst = document.querySelector(".resultConst");
const resultText = document.querySelector(".resultContainer h2 b");
const resultExtended = document.querySelector(".resultExtended");
function gauss(A, b) {
  const n = A.length;
  for (let k = 0; k < n - 1; k++) {
    let amax = Math.abs(A[k][k]);
    let imax = k;
    for (let i = k + 1; i < n; i++) {
      if (Math.abs(A[i][k]) > amax) {
        amax = Math.abs(A[i][k]);
        imax = i;
      }
    }
    if (imax !== k) {
      [A[k], A[imax]] = [A[imax], A[k]];
      [b[k], b[imax]] = [b[imax], b[k]];
    }
    for (let i = k + 1; i < n; i++) {
      if (A[k][k] !== 0) {
        const M = A[i][k] / A[k][k];
        A[i] = A[i].map((val, j) => val - M * A[k][j]);
        b[i] = b[i] - M * b[k];
      }
    }
  }
  const x = new Array(n).fill(0);
  x[n - 1] = b[n - 1] / A[n - 1][n - 1];
  for (let i = n - 2; i >= 0; i--) {
    let s = 0;
    for (let j = i + 1; j < n; j++) {
      s += A[i][j] * x[j];
    }
    x[i] = (b[i] - s) / A[i][i];
  }
  return x;
}
const clearingResult = (result) => {
  return result.map((val, i) => ` x${i + 1} = ${val.toFixed(2)}`);
};
resultExtended.addEventListener("click", () => {
  const a11 = Number(document.querySelector("#a11").value);
  const a12 = Number(document.querySelector("#a12").value);
  const a13 = Number(document.querySelector("#a13").value);
  const a14 = Number(document.querySelector("#a14").value);
  const a21 = Number(document.querySelector("#a21").value);
  const a22 = Number(document.querySelector("#a22").value);
  const a23 = Number(document.querySelector("#a23").value);
  const a24 = Number(document.querySelector("#a24").value);
  const a31 = Number(document.querySelector("#a31").value);
  const a32 = Number(document.querySelector("#a32").value);
  const a33 = Number(document.querySelector("#a33").value);
  const a34 = Number(document.querySelector("#a34").value);
  const a41 = Number(document.querySelector("#a41").value);
  const a42 = Number(document.querySelector("#a42").value);
  const a43 = Number(document.querySelector("#a43").value);
  const a44 = Number(document.querySelector("#a44").value);
  const b1 = Number(document.querySelector("#b1").value);
  const b2 = Number(document.querySelector("#b2").value);
  const b3 = Number(document.querySelector("#b3").value);
  const b4 = Number(document.querySelector("#b4").value);
  const A = [
    [a11, a12, a13, a14],
    [a21, a22, a23, a24],
    [a31, a32, a33, a34],
    [a41, a42, a43, a44],
  ];
  const B = [b1, b2, b3, b4];
  console.log(A, B);
  const result = gauss(A, B);
  console.log(result);
  const clearResult = clearingResult(result);
  resultText.textContent = clearResult;
});
resultConst.addEventListener("click", () => {
  const constA = [
    [1, -4, 0, -1],
    [1, 1, 2, 3],
    [2, 3, -1, -1],
    [1, 2, 3, -1],
  ];
  const constB = [6, -1, -1, 3];
  const result = gauss(constA, constB);
  const clearResult = clearingResult(result);
  resultText.textContent = clearResult;
});

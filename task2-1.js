const someArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = {};

for (let i = 0; i < someArray1.length; i++) {
  const index = String.fromCharCode(97 + i);
  result1[index] = someArray1[i];
}

// reduce
const result2 = someArray1.reduce((acc, currentValue, currentIndex) => {
  const char = String.fromCharCode(97 + currentIndex);
  acc[char] = currentValue;
  return acc;
}, {});

console.log(result1);
console.log(result2);

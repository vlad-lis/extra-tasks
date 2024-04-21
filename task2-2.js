someObject1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: NaN,
  l: 0,
  m: 0.25,
  n: null,
  o: {},
  p: [],
  r: Infinity,
  s: undefined,
};

// 2.2.1. Действительные конечные числа
const newArray1 = Object.values(someObject1).filter(
  (value) => typeof value === 'number' && isFinite(value)
);

console.log(newArray1);

// 2.2.2. Натуральные числа
const newArray2 = Object.values(someObject1).filter(
  (value) => Number.isInteger(value) && value > 0
);

console.log(newArray2);

// 2.2.3. POJO
const newArray3 = Object.values(someObject1).filter(
  (value) =>
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null &&
    !(value instanceof Date)
);

console.log(newArray3);

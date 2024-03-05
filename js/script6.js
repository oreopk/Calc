function x(str) {
  str = str.reduce((sum, x) => sum + x * x, 0);

  return str;
}
console.log(x([1, 2, 3, 4, 5]));

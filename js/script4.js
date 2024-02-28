function x(str) {
  str = str.reduce((sum, x) => sum + x, 0);

  return str;
}
console.log(x([1, 3, 4, 5, 2, 1]));

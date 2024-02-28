function x(str) {
  const mass = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) mass.push(str[i]);
  }
  return mass;
}
console.log(x([1, 2, 3, 4, 3, 6, 7, 1, 7, 8, 9]));

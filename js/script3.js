function x(str) {
  str = str
    .split(' ')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(' ');

  return str;
}
console.log(x('раз два три четыре'));

function x(str) {
  str = str.replaceAll('а', '#');
  str = str.replaceAll('А', '#');
  return str;
}
console.log(x('Раз Два Три Четыре'));

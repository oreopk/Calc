function x(str) {
  const glas = 'аеиоу';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (glas.includes(str[i])) counter++;
  }
  return counter;
}
console.log(x('Раз Два Три Четыре'));

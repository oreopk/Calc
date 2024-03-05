let arr = ['privet', 'poka'];
arr = arr.map((item) => {
  return item.split('').reverse().join('');
});
console.log(arr);

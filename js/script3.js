let numbers = [4, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
numbers = numbers.filter((item, index) => {
  if (index % 2 !== 0) {
    return item;
  }
});
console.log(numbers);

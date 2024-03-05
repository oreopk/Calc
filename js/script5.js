let numbers = [4, 2, 4, 4, 5, 6, 7, 8, 9, 10, 11, 13];
numbers = numbers.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(numbers);

let words = 'Программирование это просто, программирование это круто';
function count() {
  let obj = {};

  let arr = words.split(' ');

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].toLowerCase()] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].toLowerCase()] = obj[arr[i].toLowerCase()] + 1;
  }

  console.log(obj);
}
console.log();
count();

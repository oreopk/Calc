let key = 'PASCAL';
let alf = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
let arr = 'SHEISLISTENING';
let znach = [];
let znach2 = [];
let repeated = [];
function x(key, arr) {
  key = key.split('');
  arr = arr.split('');
  console.log(key);
  for (let i = 0; i <= key.length - 1; i++) {
    znach.push(alf.indexOf(key[i]));
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    znach2.push(alf.indexOf(arr[i]));
  }
  repeated = new Array(znach2.length).fill(znach).flat();

  repeated.length = znach2.length;
  for (let i = 0; i <= znach2.length - 1; i++) {
    if (znach2[i] + repeated[i] > 26) {
      znach2[i] = (znach2[i] + repeated[i]) % 26;
    } else {
      znach2[i] = znach2[i] + repeated[i];
    }
    znach2[i] = alf[znach2[i]];
  }
}
x(key, arr);
console.log(znach2);

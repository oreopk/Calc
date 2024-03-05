const guessNumber = function (shots1) {
  let numRand = Math.floor(Math.random() * 10);
  console.log(numRand);

  const gameLoop = function (shots) {
    if (shots == 0) {
      return confirm('Попытки закончились, хотите сыграть ещё?');
    }
    let nam = Number(prompt('Угадайте число от одного до десяти'));
    if (shots == 0) {
      alert('Игра окончена');
      return false;
    }
    if (isNaN(nam) == true) {
      alert('Введите число');

      return gameLoop(shots - 1);
    }
    if (numRand < nam) {
      alert(`Загаданное число меньше, осталось попыток ${shots - 1}`);
      return gameLoop(shots - 1);
    }
    if (numRand > nam) {
      alert(`Загаданное число больше, осталось попыток ${shots - 1}`);
      return gameLoop(shots - 1);
    } else if (numRand == nam) {
      return confirm('Вы угадали, хотите сыграть ещё?');
    } else {
      return false;
    }
  };

  while (gameLoop(shots1) == true) {
    numRand = Math.floor(Math.random() * 10);
  }
  alert('Goodbue');
};
guessNumber(4);

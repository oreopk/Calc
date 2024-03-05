const products = [
  { id: 1, name: 'Лаптоп', category: 'Электроника' },
  { id: 2, name: 'Книга', category: 'Литература' },
  { id: 3, name: 'Фотоаппарат', category: 'Электроника' },
  { id: 4, name: 'Сумка', category: 'Мода' },
]; // Ожидаемый результат: // { // "Электроника": [{ id: 1, name: "Лаптоп", category: "Электроника" }, { id: 3, name: "Фотоаппарат", category: "Электроника" }], // "Литература": [{ id: 2, name: "Книга", category: "Литература" }], // "Мода": [{ id: 4, name: "Сумка", category: "Мода" }]
function sort() {
  let prodname = {};

  for (let i = 0; i < products.length; i++) {
    let b = products[i].category;
    prodname[b] = [];
  }
  for (let i = 0; i < products.length; i++) {
    for (key in prodname) {
      if (key == products[i].category) {
        prodname[key].push(products[i]);
      }
    }
  }
  console.log(prodname);
}
sort();

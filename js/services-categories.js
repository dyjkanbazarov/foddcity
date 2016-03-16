angular.module('noodlio.services-categories', [])

.factory('Categories', function() {
  /**
  * List of pre-defined categories (example only!)
  *
  * If you expect that the categories might change frequently over time,
  * then it is recommended to store them on the server-side (Firebase)
  * and retrieve the list from here.
  *
  */
  return {
    'Овощи' : {title: "Овощи"},
    'Фрукты'  : {title: "Фрукты"},
    'Мясо'  : {title: "Мясо"},
    'Хлеб и выпечка'  : {title: "Хлеб и выпечка"},
    'Бакалея' : {title: "Бакалея"},
    'Молочные продукты' : {title: "Молочные продукты"},
    'Сыры и колбасы'  : {title: "Сыры и колбасы"},
    'Соки и воды' : {title: "Соки и воды"},
    'Консервы'  : {title: "Консервы"},
    'Рыба и морепродукты' : {title: "Рыба и морепродукты"},
    'Чай, кофе, какао'  : {title: "Чай, кофе, какао"},
    'Готовые блюда' : {title: "Готовые блюда"}
  }
});
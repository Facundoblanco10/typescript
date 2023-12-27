(() => {
  let prices = [10, 20, 75, 100, 200, 'hola', true, 10];
  // prices.push('hola');
  // prices.push(true);
  prices.push(123);
  prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let products = ['hola', true];
  products.push('hola');
  products.push(true);
  // products.push(123);

  let mixed: (string | number | boolean | object )[] = ['hola', true];
  mixed.push('hola');
  mixed.push(true);
  mixed.push(123);
  mixed.push([]);
  mixed.push({});

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.map((item) => item * 2);
})();

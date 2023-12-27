(() => {
  let productPrice = 100;
  productPrice = 200;
  console.log('productPrice', productPrice);

  let customerAge: number = 18;
  // customerAge = customerAge + '1'; // 181
  customerAge = customerAge + 1; // 19
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let binary = 0b1010;
  console.log('binary', binary);

  const myNumber: number = 10;
  console.log('myNumber', myNumber);
})();

(() => {
  let productPrice = 100;
  let isEnable = true;
  let productTitle = 'iPhone 12 Pro';
  // productTitle = 123;
  // productTitle = true;
  productTitle = 'iPhone 12 Pro Max';
  console.log('productTitle', productTitle);

  const productDescription = 'cuucuc';
  console.log('productDescription', productDescription);
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isEnable: ${isEnable}
  `;
  console.log('summary', summary);

  const myString: string = 'Hello World';
  console.log('myString', myString);
})();

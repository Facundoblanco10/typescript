(() => {
  let userId: string | number;
  userId = 10;
  userId = 'pepe';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log('string ' + myText.toUpperCase());
    } else {
      console.log('number ' + myText.toFixed(2));
    }
  }

  greeting(10.1221455);
  greeting('pepe');
})();

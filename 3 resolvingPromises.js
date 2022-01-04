const delay = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('the long delay has ends')
  }, seconds * 1000);
});

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((num ) => console.log(`hello world: ${num}`));

console.log('end first tick');

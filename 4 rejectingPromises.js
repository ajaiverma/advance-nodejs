const delay = (seconds) => new Promise(((resolve, reject) => {
  if (seconds > 3) {
    reject(new Error(`${seconds} is too long`));
  } else {
    setTimeout(() => {
      resolve('the long delay has ended');
    }, seconds * 1000);
  }
}));

delay(4).then(console.log).catch((err) => console.error(`error: ${err.message}`));

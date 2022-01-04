const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const beep = () => process.stdout.write("\x07");

const delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

const doStuffSequentially = () => Promise.resolve()
  .then(() => console.log('starting'))
  .then(() => delay(1))
  .then(() => console.log('waiting'))
  .then(() => delay(2))
  .then(() => writeFile('file.txt', 'Sample File...'))
  .then(beep)
  .then(() => console.log('file.txt created'))
  .then(() => delay(3))
  .then(() => unlink('file.txt'))
  .then(beep)
  .then(() => console.log('file.txt removed'))
  .catch(console.error);

doStuffSequentially();

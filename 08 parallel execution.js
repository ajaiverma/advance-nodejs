const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);

const delay = (seconds) => new Promise((resolve => setTimeout(resolve, seconds * 1000)));

Promise.all([
    writeFile('file.txt', 'File created...'),
    writeFile('file.js', 'File created...'),
    writeFile('file.json', 'File created...'),
  ],
).then(() => readdir(__dirname))
  .then(console.log);

Promise.all([
    delay(3),
    unlink('file.txt'),
    unlink('file.js'),
    unlink('file.json'),
  ],
).then(() => readdir(__dirname))
  .then(console.log);
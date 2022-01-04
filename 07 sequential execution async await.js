const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);

const beep = () => process.stdout.write("\x07");

const delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

const doStuffSequentially = async () => {
  console.log('starting');
  await delay(1);
  console.log('waiting')
  await delay(2);
  await writeFile('file.txt', 'Sample File...');
  beep();
  console.log('file.txt created');
  await delay(3);
  await unlink('file.txt');
  beep();
  console.log('file.txt removed');
}

//doStuffSequentially();

async function start() {
  const files = await readdir(__dirname);
  console.log(files);
}

start().then(console.log);

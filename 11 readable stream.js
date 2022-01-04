const fs = require('fs');

const readStream = fs.createReadStream('powder-day.mp4');

readStream.on('data', (chunk) => {
  console.log('reading little chunk\n', chunk.length);
});

readStream.on('end', () => {
  console.log('read stream finished');
});

readStream.on('error', (error) => {
  console.log('an error has occurred.');
  console.error(error);
});

readStream.pause();

process.stdin.on('data', (chunk) => {
  // const text = chunk.toString().trim();
  // console.log('echo: ', text);

  if (chunk.toString().trim() === 'finished') {
    readStream.resume();
  }

  readStream.read();
});

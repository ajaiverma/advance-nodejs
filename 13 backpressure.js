const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('powder-day.mp4');
const writeStream = createWriteStream('copy-1.mp4', {
  highWaterMark: 123456
});

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);

  if (!result) {
    console.log('backpressure');
    readStream.pause();
  }
});

readStream.on('error', () => {
  console.log('error while reading stream!');
});

readStream.on('end', () => {
  writeStream.close();
})

writeStream.on('drain', () => {
  console.log('drained');
  readStream.resume();
});

writeStream.on('close', () => {
  console.log('copy end!');
});

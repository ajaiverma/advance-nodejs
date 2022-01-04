const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('powder-day.mp4');
const writeStream = createWriteStream('copy-2.mp4');

readStream.pipe(writeStream).on('error', console.error);

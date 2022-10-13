const fs = require('fs');

const dest = fs.createWriteStream('./output/live/program');

const { SRTReadStream } = require('@eyevinn/srt');

const srt = new SRTReadStream('83.194.47.213', 2944);

srt.listen(readStream => {
  console.log("Client connected");
  readStream.pipe(dest);
});
srt.on('end', () => {
  console.log("Client disconnected");
});
console.log("Waiting for client to connect");
// function hideString(str) {
//   return str.replace(/[a-zA-Z]/g, 'X');
// }
//
// const hidden = hideString("HELLO WORLD");
//
// console.log(hidden);

function hideString(str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, 'X'));
  });
}

hideString("HELLO WORLD", (hidden) => {
  console.log(hidden);
});

console.log('end');

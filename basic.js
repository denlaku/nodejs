const fs = require('fs');
debugger
const { EventEmitter } = require('events');
// console.log(module);
// console.log(global);
// console.log(process);

// console.log(__dirname);
// console.log(__filename);
//
// setTimeout(() => {
//   console.log('setTimeout');
// }, 3000);
//
// let i = 0;
// const si = setInterval(()=>{
//   if (i >= 20) {
//     clearInterval(si);
//   }
//   console.log('setInterval: ' + i);
//   i++;
// }, 100);


const emitter = new EventEmitter();

process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
});

emitter.on('error', function(err) {
  console.error('出错：' + err.message);
});

emitter.emit('error', new Error('something bad happened'));




console.log('===basic end===');

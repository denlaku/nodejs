const EventEmitter  = require('events');

const emitter = new EventEmitter();

emitter.on('error', (a, b, c) => {
  console.log(a());
});

emitter.on('mydata', (a, b, c) => {
  console.log(a());
});

emitter.on('uncaughtException', (a, b, c) => {
  console.log(a, b, c);
});

emitter.emit('error', () => {
  return 111;
});

emitter.emit('mydata', () => {
  return 'mydata-callback';
});

emitter.emit('mydata', () => {
  return 'mydata-callback2';
});

try {
  console.log(kkk);
} catch (e) {
  // throw Error(e);
} finally {

}

console.log(emitter.eventNames());

const fs = require('fs');

const isUtf8 = Buffer.isEncoding('utf8');
console.log(isUtf8);

const isBuffer = Buffer.isBuffer(new Buffer(100));
console.log(isBuffer);

const byteLength = Buffer.byteLength('地方撒大声地', 'GBK');
console.log(byteLength);


const lpad = {
  0: '',
  1: '0',
  2: '00',
  3: '000',
  4: '0000',
  5: '00000',
  6: '000000',
  7: '0000000',
};

const toString = (data) => {
  let str = '';
  for (let i = 0; i < data.length; i++) {
    let b1 = data[i].toString(2);
    while(b1.length < 8) {
      b1 = '0' + b1;
    }
    let r = b1;
    if (b1.match(/^110/)) {
      const b2 = data[++i].toString(2);
      r = b1.substr(3) + b2.substr(2);

    } else if (b1.match(/^1110/)) {
      const b2 = data[++i].toString(2);
      const b3 = data[++i].toString(2);
      r = b1.substr(4) + b2.substr(2) + b3.substr(2);;
    }
    r = '0b' + r;
    str += String.fromCodePoint(r);
  }
  return str;
}

// fs.readFile('./assert.js', (error, data) => {
//   if (error) {
//     console.log('===error===');
//     console.log(error);
//   } else {
//     console.log('++++++++++++toString+++++++++++++++');
//     // console.log(data.toString());
//     console.log(toString(data));
//     fs.writeFile('rrrrr.txt', toString(data), () => {})
//     console.log('++++++++++++toJSON+++++++++++++++');
//     console.log(data.toJSON());
//   }
// });

// fs.readFile('./assert.js', 'utf-8', (error, data) => {
//   if (error) {
//     console.log('===error===');
//     console.log(error);
//   } else {
//     console.log('++++++++++++toString+++++++++++++++');
//     console.log(data);
//     data.split(/\r?\n/).forEach((line, index) => console.log(index, line));
//   }
// });

fs.watchFile('./rrrrr.txt', function (curr, prev) {
  console.log('the current mtime is: ' + curr.mtime);
  console.log('the previous mtime was: ' + prev.mtime);
});

const fs = require('fs');
debugger;
const input = fs.createReadStream('R.t');
input.on('data', (data) => {
  console.log(data.toString());
});

// fs.readFile('./assert.js', (error, data) => {
//   if (error) {
//     console.log('===error===');
//     console.log(error);
//   }
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
//
// });


// const toString = (data) => {
//   let str = '';
//   for (let i = 0; i < data.length; i++) {
//     let b1 = data[i].toString(2);
//     while(b1.length < 8) {
//       b1 = '0' + b1;
//     }
//     let r = b1;
//     if (b1.match(/^110/)) {
//       const b2 = data[++i].toString(2);
//       r = b1.substr(3) + b2.substr(2);
//
//     } else if (b1.match(/^1110/)) {
//       const b2 = data[++i].toString(2);
//       const b3 = data[++i].toString(2);
//       r = b1.substr(4) + b2.substr(2) + b3.substr(2);;
//     } else if (b1.match(/^11110/)) {
//       const b2 = data[++i].toString(2);
//       const b3 = data[++i].toString(2);
//       const b4 = data[++i].toString(2);
//       r = b1.substr(5) + b2.substr(2) + b3.substr(2) + b4.substr(2);
//     }
//     r = '0b' + r;
//     str += String.fromCodePoint(r);
//   }
//   return str;
// }

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

// const readFileSync = fs.readFileSync('./rrrrr.txt', 'utf8');
// // console.dir(readFileSync);
// readFileSync.split(/\r?\n/).forEach((e, i) => {
//   console.log(i, e);
// });

// fs.writeFile('.writeFile', '断言', (error) => {
//   if (!error) {
//     console.log('写文件成功');
//   }
// });
//
// fs.appendFile('.writeFile', '断言', () => {
//   console.log('添加内容成功');
// })

// fs.writeFileSync('.writeFileSync', '断言', 'utf-8');
//

// fs.exists('../nodejs/rrrrr.txt', (exists) => {
//   console.log(exists ? "it's there" : "no file!");
// });

// const exists = fs.existsSync('../nodejs/');
// console.log(exists);

// fs.mkdir('sadsd', 777, () => {
//   console.log('创建文件成功');
// });
//

// fs.rmdir('sadsd', () => {
//   console.log('删除文件成功');
// });

// console.dir(fs);

// fs.stat('../nodejs/rrrrr.txt', (error, stat) => {
//   console.dir(stat);
//   console.log(stat.isFile());
//   console.log(stat.isDirectory());
// });

// fs.watchFile('./rrrrr.txt', function (curr, prev) {
//   // console.log('the current mtime is: ' + curr.mtime);
//   // console.log('the previous mtime was: ' + prev.mtime);
//   console.dir(curr);
//   console.log('=====================');
//   console.dir(prev);
// });

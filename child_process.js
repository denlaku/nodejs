const { execFile } = require('child_process');

console.log(require.main === module);

// execFile('./echo.bat', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// })

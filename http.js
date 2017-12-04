const http = require('http');
const url = require('url');
const querystring = require('querystring');

console.log(typeof http.Agent);

// console.dir(http);

// const server = http.createServer(function (request, response){
//   proxy(request, response);
//   // console.log('-------------------------------------------------------------------------');
//   // console.log('-------------------------------------------------------------------------');
//   // const urlStr = 'http://' + request.headers.host + request.url;
//   // console.log(urlStr);
//   // const urlObj = url.parse(urlStr, true);
//   // console.log(urlObj);
//   // response.writeHead(200, {'Content-Type': 'text/plain'});
//   // response.write("Hello World");
//   // response.end();
// }).listen(3006, 'localhost', function() {
//   const address = server.address();
//   console.log('mean->: localhost:%d', address.port);
// });


function proxy(request, response) {
  var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '',
    method: 'GET',
    headers: {
    }
  };

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      // console.log('BODY: ' + chunk);
      response.write(chunk);
      response.end();
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.end();
}

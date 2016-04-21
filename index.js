var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.write(JSON.stringify(parseHeaders(req.headers)));
  res.end();
}).listen(process.env.PORT || 8000);

function parseHeaders(headers) {
  var ip, lang, soft;
  ip = headers['x-forwarded-for'];
  lang = headers['accept-language'].split(',')[0];
  soft = headers['user-agent'].match(/\(([^\)]+)\)/)[1];
  return {
    ip: ip,
    lang: lang,
    soft: soft
  };
}

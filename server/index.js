/*eslint-disable */
require('babel/register');
var server = require('./server');
server.use(require('./hot-reload'));
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Example app listening at http://localhost:%s', port);
});



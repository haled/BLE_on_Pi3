var http = require('http');

module.exports = function(serverIp, serverPort) {
  function handle_request(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    var currentDate = new Date();
    var htmlData = '<html><head><meta name="description" content="Darren Node Server"><title>Node Server</title></head><body>Hello HackEdu attendees</body></html>';
    //response.end('Hola beacon receiver.\nThe current date is: ' + currentDate);
    response.send(htmlData);
    console.log('Request handled.');
  }

  http.createServer(handle_request).listen(serverPort, serverIp);
  console.log('Handling requests on ' + serverIp + ' at port ' + serverPort);
};
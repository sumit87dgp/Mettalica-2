const http = require('http');
const debug = require('debug')('mettalica');
const app = require('./MettalicaBkndService/app');

// basically checking the port number recieved is a valid number or nor
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    //named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// listen to the type of error and log
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// essentially log the incoming request

const onListening = () => {
  const addre = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


// const port = 3000;
// app.set('port', port)

// const server = http.createServer(app);

// server.listen(port);

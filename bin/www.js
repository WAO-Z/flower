const http = require("http");
const serverHandle = require("../app");

http.createServer(serverHandle).listen(3000)
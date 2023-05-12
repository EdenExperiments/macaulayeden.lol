const http = require('http');

http.createServer(function (req, res) {
        res.write("Created this web server on my path to being a full-stack engineer. Maybe one day it will host a portfolio if codewars stops distracting me");
        res.end()
}
).listen(3000);

console.log("Server Started");

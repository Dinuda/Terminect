// Packages
const net = require("net")
const fs = require("fs");

let server, istream = fs.createReadStream("./sender/send.pdf");

server = net.createServer(socket => {
    socket.pipe(process.stdout);
    istream.on("readable", function () {
        let data;
        while (data = this.read()) {
            socket.write(data);
        }
    })
    istream.on("end", function () {
        socket.end();
    })
    socket.on("end", () => {
        server.close(() => { console.log("\nTransfer is done!") });
    })
})

// Output server [PORT]
server.listen(8000, '0.0.0.0');
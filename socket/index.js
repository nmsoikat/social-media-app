const io = require('socket.io')(8900,{
  cors: {
    origin: 'http://localhost:3000'
  }
})


// every connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // emit: every user
  io.emit("welcome", "Hello from socket server")
})
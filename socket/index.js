const io = require('socket.io')(8900,{
  cors: {
    origin: 'http://localhost:3000'
  }
})

// active users
let users = []

// user added online
const addUser = (userId, socketId) => {
  !users.some(user => user.userId === userId) && users.push({userId, socketId})
}

// remove from online
const removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId)
}

// every connection
io.on("connection", (socket) => {
  console.log("A user connected");
  // emit: every user
  // io.emit("welcome", "Hello from socket server")

  // CONNECTED
  //receive from client 
  socket.on('addUser', userId => {
    addUser(userId, socket.id) // set userId and socketId

    //send to client
    io.emit("getUsers", users) // online users
  })


  // DISCONNECTED
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    removeUser(socket.id) // remove active user

    //send to client
    io.emit('getUsers', users) // online users
  })
})
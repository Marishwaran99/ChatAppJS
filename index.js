const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
var server = app.listen(PORT, () => {
  console.log("listening");
});
app.use(express.static("public"));
var io = socketio(server);
io.on("connection", socket => {
  console.log("made connection", socket.id);
  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });
});

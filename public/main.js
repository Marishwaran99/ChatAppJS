var socket = io.connect();
console.log(socket);

const send = document.querySelector("#send-btn");
const msg = document.querySelector("#message");
const output = document.querySelector(".messages");

send.addEventListener("click", function() {
  socket.emit("chat", { message: msg.value });
});
msg.addEventListener("keypress", e => {
  if (e.keyCode == 13 || e.which == 13) {
    socket.emit("chat", { message: msg.value });
  }
});
socket.on("chat", function(data) {
  output.innerHTML += `<p class="msg">${data.message}</p>`;
});

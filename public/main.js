var name, socket;
window.onload = function() {
  socket = io.connect();
  name = this.prompt("Enter your name");

  const send = document.querySelector("#send-btn");
  const msg = document.querySelector("#message");
  const output = document.querySelector(".messages");

  send.addEventListener("click", function() {
    if (msg.value) {
      socket.emit("chat", { message: msg.value, name: name });
      msg.value = "";
    }
  });
  msg.addEventListener("keypress", e => {
    if (e.keyCode == 13 || e.which == 13) {
      if (msg.value) {
        socket.emit("chat", { message: msg.value, name: name });
        msg.value = "";
      }
    }
  });
  socket.on("chat", function(data) {
    output.innerHTML += `<div class="msg" style="display:flex;justify-content:space-between;"><p>${data.message}</p><p style="font-weight:bold;">${data.name}</p></div>`;
  });
};

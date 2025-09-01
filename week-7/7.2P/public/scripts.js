// Create socket instance
const socket = io();

// Listen for "number" event from server
socket.on('number', (msg) => {
  console.log("Random number:", msg);
  document.getElementById('number').innerText = msg;
});

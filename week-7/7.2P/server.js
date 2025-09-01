const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Add route (calculator – from week 6)
app.get('/add', (req, res) => {
  const aRaw = typeof req.query.a === 'string' ? req.query.a.trim() : req.query.a;
  const bRaw = typeof req.query.b === 'string' ? req.query.b.trim() : req.query.b;

  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Input must be numeric');
  }

  const sum = a + b;
  res.send(`Result: ${a} + ${b} = ${sum}`);
});

// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Emit random numbers every second
  const timer = setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);

  socket.on('disconnect', () => clearInterval(timer));
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import route file
const matchRoutes = require('./routes/matchesroutes');

// Middleware for JSON (future-proof if you add POST later)
app.use(express.json());

// Use routes
app.use('/api/matches', matchRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to TeamX – Match Schedules API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

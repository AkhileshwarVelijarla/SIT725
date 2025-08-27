const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD

const matchRoutes = require('./routes/matchesroutes');


app.use(express.json());


app.use('/api/matches', matchRoutes);


=======
// Import route file
const matchRoutes = require('./routes/matchesroutes');

// Middleware for JSON (future-proof if you add POST later)
app.use(express.json());

// Use routes
app.use('/api/matches', matchRoutes);

// Root route
>>>>>>> 98e0fea (5.2C commit and Push)
app.get('/', (req, res) => {
  res.send('Welcome to TeamX – Match Schedules API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

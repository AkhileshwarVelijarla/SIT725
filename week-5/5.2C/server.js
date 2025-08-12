const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const matchRoutes = require('./routes/matchesroutes');


app.use(express.json());


app.use('/api/matches', matchRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to TeamX – Match Schedules API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Pets API – Home');
});

// Add route (calculator)
app.get('/add', (req, res) => {
  const aRaw = typeof req.query.a === 'string' ? req.query.a.trim() : req.query.a;
  const bRaw = typeof req.query.b === 'string' ? req.query.b.trim() : req.query.b;

  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Input must be numeric');
  }

  const sum = a + b;
  res.send(`Result: ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app; // (harmless export if you later switch to supertest)

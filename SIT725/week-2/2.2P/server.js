const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid numbers provided.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

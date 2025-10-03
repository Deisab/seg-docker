const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: "API saudável!" });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

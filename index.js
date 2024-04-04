// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`bem vindo, ${req.nome}`);

});

app.listen(port, () => {
  console.log(`Express.js server listening at http://localhost:${port}`);
});


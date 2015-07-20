const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index.js', (req, res) => {
  res.sendFile('dist/index.js', {
    root: './',
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

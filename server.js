const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/web-liferay'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/web-liferay/index.html');
});

app.listen(PORT, () => {
  console.log('servidor iniciado na porta ' + PORT)
});

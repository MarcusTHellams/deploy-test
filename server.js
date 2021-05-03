const express = require('express');
const path = require('path');
const app = express();

const { MESSAGE } = process.env;

app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, 'build'), { index: '_' }));

app.use((_, res) => {
  res.render('index.html', { message: JSON.stringify(MESSAGE) });
});

app.listen(3000, () => {
  console.log('Listening');
});

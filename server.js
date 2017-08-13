const express = require('express');

const app = express();

app.set('port', process.env.PORT || '8080');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/test', (req, res) => {
  res.json({
    user: 'Ryo',
    message: 'Well, this seemed to have worked.',
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});

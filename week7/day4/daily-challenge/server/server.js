const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});


app.post('/api/world', (req, res) => {
  console.log('Received from client:', req.body);
  res.send({ reply: `I received your POST request. This is what you sent me: ${req.body.message}` });
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});

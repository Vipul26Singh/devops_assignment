const express = require('express');
const app = express();

let call = 1;

app.get('/', (req, res) => {
  res.send(`Hello everyone there`);
});

app.get('/health', (req, res) => {
  if(call % 10 == 0) {
  	res.send('NOK');
  } else {
	res.send('OK')
  }
  call = call + 1
});

const port = 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});


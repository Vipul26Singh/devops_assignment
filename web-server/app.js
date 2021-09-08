const express = require('express');
const app = express();
const promClient = require('prom-client');

requestSuccess = new promClient.Counter({
        name: "request_success",
        help: "Number of successful requests"
})

requestFailed = new promClient.Counter({
        name: "request_failed",
        help: "Number of failed requests"
})


let call = 1;

app.get('/', (req, res) => {
  res.json({ message: `Hello everyone there`})
  requestSuccess.inc(1)
});

app.get("/fail", (req, res) => {
  res.json({ message: `failed`})
  requestFailed.inc(1)
})


app.get('/health', (req, res) => {
  if(call % 10 == 0) {
	res.json({ message: `NOK`})
  } else {
	res.json({ message: `OK`})
  }
  call = call + 1
});

app.get("/metrics", (req, res) => {
  res.end(promClient.register.metrics());
});

module.exports = {
	start(cb) {
		server = app.listen(3000, () => {
			console.log("HTTP server listening on port 3000")
			cb()
		})
	},
	stop (cb) {
		server.close(cb)
	}
}

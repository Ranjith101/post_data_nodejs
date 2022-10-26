// Importing express module
const express = require('express');
const app = express();
const os = require('os');

app.use(express.json());

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
const { username, password } = req.body;
const { authorization } = req.headers;
const hostName = os.hostname();
res.send({
	hostName,
	username,
	password,
	authorization,
});
// console.log(res);
});

app.listen(3000, () => {
console.log('Our express server is up on port 3000');
});

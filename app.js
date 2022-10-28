// Importing express module
const express = require("express");
const app = express();
const os = require("os");
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname );
});
app.post("*", function (req, res) {
  const { username, password } = req.body;
  const { authorization } = req.headers;
  const hostName = os.hostname();

  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const port = process.env.PORT || PORT;

  const fullUrl = `${protocol}://${host}:${port}${url}`;

  //  const responseString = `Full URL is: ${fullUrl}`;
  res.send({
    hostName,
    username,
    password,
    authorization,
	  fullUrl
  });
});
app.listen();


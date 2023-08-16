const express = require("express");
const app = express();
const port = 8080;

//Servir contenido estatico

app.use(express.static("public"));

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

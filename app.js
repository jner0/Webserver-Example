const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "NEMECIO RODRÍGUEZ",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "NEMECIO RODRÍGUEZ",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "NEMECIO RODRÍGUEZ",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

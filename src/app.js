const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/livros", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Successful connection.")
});

const livros = require("./routes/livroRouter")

app.use(bodyParser.json());

app.use("/livros", livros);

module.exports = app;
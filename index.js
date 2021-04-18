

const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const PORT= process.env.PORT || 5000;

const MongoClient = require("mongodb").MongoClient;
//peitetään uri
require("dotenv/config");
const uri = process.env.DB_CONNECTION;

//lisätään mongoose ja tarkistetaan yhteys tietokantaan
const mongoose = require("mongoose");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to DB")
);
//esitetään Country-niminen Schema
const Country = mongoose.model(
  "Country",
  {
    name: String,
    capital: String,
    population: Number,
  },
  "europe"
);
// haetaan etusivu html-tiedostosta
//app.get("/", (req, res) => {
//  res.sendFile(__dirname + "/index.html");
//});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

//reitti api/countries hakee koko listan
app.get("/api/countries", (req, res) => {
  Country.find({}, (err, results) => {
    console.log("All the countries");
    res.json(results);
  });
});

//haetaan tietoja maan nimellä
app.get("/api/name/:text", (req, res) => {
  Country.find({ name: req.params.text }, (err, results) => {
    console.log("here is" + req.params.text);
    res.json(results);
  });
});


//haetaan tietoja _id:llä
app.get("/api/:id", (req, res) => {
  Country.find({ _id: req.params.id }, (err, results) => {
    console.log("here is ");
    res.json(results);
  });
});

//poistetaan tietoja _id:llä
app.delete("/api/delete/:id", function (req, res) {

  var id = req.params.id;

  Country.findByIdAndDelete(id, function (err, results) {
    res.json("Deleted " + id + " " + results.name, 200);
  });
});

//lisätään uusia tietoja
app.post("/api/post", function (req, res) {
    //luetaan syötettyjä tietoja muuttujaan newCountry
  const newCountry = new Country({
    name: req.body.name,
    capital: req.body.capital,
    population: req.body.population
  });
  //lisätään tietokantaan
  newCountry.save(function (err, result) {
    if (err) console.log(err);
    console.log("New country " + req.body.name);
    res.send("New country " + req.body.name + " is added");
  });
});
//muutetaan tietoja hakemalla maan nimellä
app.put("/api/update/:text", function (req, res) {
    Country.updateOne({name: req.params.text}, 
        req.body, function (err, results) {
        if (err){
            console.log(err)
        }
        else{
            res.json("Updated Docs : "+ req.body);
            console.log(req.body)
        }
    });
});

app.listen(PORT);

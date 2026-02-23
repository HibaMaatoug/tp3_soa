const axios = require("axios");
const fs = require("fs");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

axios.get(url)
  .then(response => {
    const data = response.data;

    fs.writeFileSync("weather-axios.json", JSON.stringify(data, null, 2));
    console.log("Fichier weather-axios.json créé !");
  })
  .catch(error => {
    console.log("Erreur :", error.message);
  });
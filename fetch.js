const fs = require("fs");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Sauvegarder toute la réponse JSON dans un fichier
    fs.writeFileSync("weather-fetch.json", JSON.stringify(data, null, 2));
    console.log("Fichier weather-fetch.json créé !");
  })
  .catch(error => {
    console.log("Erreur :", error);
  });
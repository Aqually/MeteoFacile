// pour récupérer les donnés de l'API de météo
import axios from "axios";

const API_KEY = "&type=accurate&APPID=3004b18e0fdd3386ef62b75d5b459b02";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?q="
// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

const round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const DegreeVersCelcius = (temp) => {
    return round((parseFloat(temp) - 273.15), 1).toFixed(1) + " °C";
}

const creerObjetMeteo = (meteo) => {
    let temperature = [meteo.main.temp, meteo.main.temp_max, meteo.main.temp_min].map((x) => {
        return DegreeVersCelcius(x);
    })
    return {
        nom: meteo.name,
        temp: {
            courant: temperature[0],
            max: temperature[1],
            min: temperature[2]
        },
        condition: meteo.weather["0"].main
    }
}

const fetchMeteoInfo = (ville) => {
    return axios.get(API_URL + ville + API_KEY);
}

const meteoHelpers = {
    getMeteoInfo: (ville) => {
        return fetchMeteoInfo(ville).then((meteo) => {
            return creerObjetMeteo(meteo.data);
        }).catch(function(err) {
            console.warn('Erreur dans getMeteoInfo: ', err)
        })
    }
}
export default meteoHelpers;

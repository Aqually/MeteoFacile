// pour récupérer les donnés de l'API de météo
import axios from "axios";


const API_KEY = "&type=accurate&APPID=3004b18e0fdd3386ef62b75d5b459b02";
const API_URL =  "http://api.openweathermap.org/data/2.5/weather?q="
// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

 const round = (value, precision) => {
     var multiplier = Math.pow(10, precision || 0);
     return Math.round(value * multiplier) / multiplier;
 }

const DegreeVersCelcius = (temp) => {
   return round((parseFloat(temp) - 273.15),1).toFixed(1) +" °C";
 }

const fetchMeteoInfo = (ville) => {
  return axios.get(API_URL + ville + API_KEY);
}

const meteoHelpers = {
  getMeteoInfo: (ville) => {
    return fetchMeteoInfo(ville).
      then((meteo) => {
        return meteo.data
      }).
      catch(function (err) {console.warn('Erreur dans getMeteoInfo: ', err)})
  },

  getTemp: (temperature) => {
    return DegreeVersCelcius(temperature);
  }
}
export default meteoHelpers;

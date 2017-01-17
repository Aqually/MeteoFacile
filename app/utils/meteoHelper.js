// pour récupérer les donnés de l'API de météo
import axios from "axios";

const API_KEY = "&type=accurate&APPID=3004b18e0fdd3386ef62b75d5b459b02&cnt=5";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q="

//arrondir un nombre(valeur) selon le nombre de chiffre à la virgule (nbFloat)
const round = (valeur, nbFloat) => {
    var multiplicateur = Math.pow(10, nbFloat || 0);
    return Math.round(valeur * multiplicateur) / multiplicateur;
}

//convertir de kelvin vers celcius
const DegreeVersCelcius = (temp) => {
    return round((parseFloat(temp) - 273.15), 1).toFixed(1) + " °C";
}

//pour utiliser map sur un object
Object.map = (o, f, ctx) => {
    ctx = ctx || this;
    var result = {};
    Object.keys(o).forEach(function(k) {
        result[k] = f.call(ctx, o[k], k, o);
    });
    return result;
}

//récupérer la température d'un jour
const RecupererTemp = ({day, max, min, eve, morn, night}) => {

    let temp = {
        jour: day,
        max: max,
        min: min,
        soir: eve,
        matin: morn,
        nuit: night
    }

    return Object.map(temp, (v,k,o) => {
        return DegreeVersCelcius(v);
    });
}

//créer un objet qui contient la météo de 5 jours
const creerMeteoCinqJour = (meteo,i) =>{
    let temperatures = RecupererTemp(meteo.temp);

    return {
        temp: temperatures,
        condition: meteo.weather["0"].description,
    }

}

//obtenir les info meteos d'une ville
const fetchMeteoInfo = (ville) => {
    return axios.get(API_URL + ville + API_KEY);
}

//fonction pour récupérer un objet contenant les infos météorologiques d'une ville avec un API
const meteoHelpers = {
    getMeteoInfo: (ville) => {
        return fetchMeteoInfo(ville).then((meteo) => {
            let meteoCinqJour = meteo.data.list.map((meteo) =>{
                return creerMeteoCinqJour(meteo);
            })
            return {
                nom: meteo.data.city.name,
                temperature :meteoCinqJour
            }
        }).catch(function(err) {
            console.warn('Erreur dans getMeteoInfo: ', err)
        })
    }
}
export default meteoHelpers;

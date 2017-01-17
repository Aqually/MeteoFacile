import React from "react";

const MeteoVille = (props) => (props.enChargement === true
    ? <p>En chargement</p>
    : <div>
        <h2>Météo de {props.meteo.nom}</h2>
        <div>
            <p>Matin: {props.meteo.temperature["0"].temp.matin}</p>
            <p>Jour: {props.meteo.temperature["0"].temp.jour}</p>
            <p>Soir: {props.meteo.temperature["0"].temp.soir}</p>
            <p>Nuit: {props.meteo.temperature["0"].temp.nuit}</p>
            <p>Maximum: {props.meteo.temperature["0"].temp.max}</p>
            <p>Minimum: {props.meteo.temperature["0"].temp.min}</p>
            <p>Condition: {props.meteo.temperature["0"].condition}</p>
        </div>
    </div>);

export default MeteoVille;

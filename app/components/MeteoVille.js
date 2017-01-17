import React from "react";

const MeteoVille = (props) => (props.enChargement === true
    ? <p>En chargement</p>
    : <div>
        <h2>Météo de {props.meteo.nom}</h2>
        <div>
            <p>Temperature: {props.meteo.temp.courant}</p>
            <p>Maximum: {props.meteo.temp.max}</p>
            <p>Minimum: {props.meteo.temp.min}</p>
        </div>
    </div>);

export default MeteoVille;

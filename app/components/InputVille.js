import React from "react";

const InputVille = (props) => (
    <form onSubmit={props.onSubmitVille}>
        <input className="form-control smallMargin" placeholder="exemple: Montréal" onChange={props.onUpdateVille} value={props.ville} type="text"/>
        <button className="btn btn-block btn-success smallMargin" type="submit">Obtenir la Météo</button>
    </form>
);

export default InputVille;

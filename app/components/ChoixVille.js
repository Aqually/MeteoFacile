import React from "react";
import BoutonMeteo from "../components/BoutonMeteo";
import InputVille from "../components/InputVille";

const ChoixVille = () => (
  <div>
    <h2>Choisir votre ville</h2>
    <InputVille/>
    <BoutonMeteo/>
  </div>
);

export default ChoixVille;

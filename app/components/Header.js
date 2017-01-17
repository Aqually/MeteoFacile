import React from "react";
import InputVilleContainer from "../containers/InputVilleContainer";

const styles = {
    nav: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#d87701",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    h1: {
        margin: 0,
        marginLeft: "0.25em",
        padding: 0,
        fontSize: "3em",
        lineHeight: "1.8em",
        color: "white",
        width: "50%"
    },
    formMeteo: {
        padding: "0.5em"
    },
    divHeader: {
        height: "10%"
    }
}

const Header = (props) => (
    <div style={styles.divHeader}>
        <nav style={styles.nav}>
            <h1 style={styles.h1}>Météo Facile</h1>
            <div className="div-header" style={styles.formMeteo}><InputVilleContainer/></div>
        </nav>
    </div>
);

export default Header;

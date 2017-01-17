import React from "react";
import {withRouter} from 'react-router';
import InputVille from "../components/InputVille";

class InputVilleContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ville: ""
        };
    }

    handleSubmitVille(e) {
        e.preventDefault();
        var ville = this.state.ville;
        this.setState({ville});
        console.log(ville);

        if (ville) {
            console.log("route change?", ville);
            this.context.router.replace({
                pathname: "/meteo/" + ville
            })
        }
    }

    handleUpdateVille(ville) {
        this.setState({ville})
    }

    render() {
        return (<InputVille onSubmitVille={event => this.handleSubmitVille(event)} onUpdateVille={event => this.handleUpdateVille(event.target.value)}/>);
    }
}

InputVilleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default InputVilleContainer;

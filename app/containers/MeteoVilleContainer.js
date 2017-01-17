import React from "react";
import MeteoVille from "../components/MeteoVille";
import meteoHelpers from "../utils/meteoHelper";

class MeteoVilleContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            enChargement: true,
            ville: "",
            meteo: {}
        };
    }

    appelerMeteoHelper() {
        let ville = this.props.routeParams.ville;
        meteoHelpers.getMeteoInfo(ville).then((meteo) => {
            this.setState({meteo: meteo, ville: meteo.nom, enChargement: false})
        })
    }

    componentWillReceiveProps() {
        var ville = this.props.routeParams.ville;
        this.setState({ville});
    }

    componentDidMount() {
        this.appelerMeteoHelper();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.ville != this.state.ville) {
            this.appelerMeteoHelper();
        }
    }

    render() {
        return (<MeteoVille meteo ={this.state.meteo} enChargement={this.state.enChargement}/>);
    }
}

MeteoVilleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default MeteoVilleContainer;

import React from "react";
import MeteoVille from "../components/MeteoVille";

class MeteoVilleContainer extends React.Component {

   constructor(props,context){
      super(props,context);
      this.state = {
         ville: ""
      };
   }

   componentDidUpdate(){
      var ville = this.props.location.query.ville;
      this.setState({ville});
   }

   render() {
      return (
         <MeteoVille ville={this.state.ville} />
      );
   }
}

MeteoVilleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default MeteoVilleContainer;

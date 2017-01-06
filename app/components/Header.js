var React = require("react");

var styles = {
  nav: {
    margin: 0,
    padding: 0,
    height: "75px",
    width: "100%",
    backgroundColor: "#d87701"
  },
  h1:{
    margin: 0,
    marginLeft: "0.25em",
    padding: 0,
    fontSize: "3em",
    lineHeight: "1.8em",
    color: "white"
  }
}

var Header = React.createClass({
    render: function(){
        return (
            <nav style={styles.nav}>
                <h1 style={styles.h1}>Météo Facile</h1>
            </nav>
        )
    }
});

module.exports = Header;

import React from "react";

require("../main.css");

const styles = {
  main: {
    width:"100%",
    height:"90%",
    backgroundColor:"#f3dcc8",
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  },
}

const Main = (props) => (<main style={styles.main}>{props.children}</main>);

export default Main;

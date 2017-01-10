import React from "react";
import Header from "./Header"
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

const Main = (props,context) => (
   <div>
      <Header />
      <main style={styles.main}>
         <div>

            {props.children}
         </div>
      </main>
   </div>
)

export default Main;

import React from "react";
import "./navbar.css"


function Navbar(props) {
    return (
        <nav className="navbar navbar-light naav">

        <div className="container">
        
                        <span className="navbar-brand mb-0 h1 ">Clicky Game</span>
                        <span className="navbar-brand mb-0 h1 ">{props.result} </span>
                        <span className="navbar-brand mb-0 h1 ">Score : {props.score} </span>
                        <span className="navbar-brand mb-0 h1 ">Top Score : {props.top} </span>
        </div>
            
        



         
        </nav>
    );
}

export default Navbar;
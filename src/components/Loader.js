import React from "react";
import loaderIcon from "../icon/Loader.svg";
import "../css/Loader.css";

function Loader() {
    return ( <
        div >
        <
        img src = { loaderIcon }
        alt = "Loader Icon"
        className = "loader" / >
        <
        /div>
    );
}

export default Loader;
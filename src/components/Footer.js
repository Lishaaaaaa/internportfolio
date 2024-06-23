import React from "react";
import "../css/Footer.css";
import LIcon from "../icon/Linkedin.svg";
import CIcon from "../icon/Contact.svg";
import EIcon from "../icon/Email.svg";
import GIcon from "../icon/Github.svg";

function Footer() {
    return ( <
        footer >

        <
        div className = "item" >
        <
        a href = "mailto:lishacarlo16@gmail.com" >
        <
        img src = { EIcon }
        alt = "Email Icon"
        className = "eicon" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "item" >
        <
        a href = "https://www.linkedin.com/in/lisha-carlo-b15a03229" >
        <
        img src = { LIcon }
        alt = "Linkedin Icon"
        className = "licon" / > { " " } <
        /a>{" "} <
        /div>{" "} <
        div className = "item" >
        <
        a href = "https://www.github.com/Lishaaaaaa" >
        <
        img src = { GIcon }
        alt = "Github Icon"
        className = "gicon" / > { " " } <
        /a>{" "} <
        /div>{" "} <
        div className = "item-copyright" > { " " } { String.fromCharCode(169) } { new Date().getFullYear() }
        Lisha.All rights reserved. { " " } <
        /div>{" "} <
        /footer>
    );
}

export default Footer;
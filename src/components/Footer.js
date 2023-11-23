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
        a href = "#" >
        <
        img src = { CIcon }
        alt = "Contact Icon"
        className = "cicon" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "item" >
        <
        a href = "#" >
        <
        img src = { EIcon }
        alt = "Email Icon"
        className = "eicon" / >
        <
        /a>{" "} <
        /div>{" "} <
        div className = "item" >
        <
        a href = "#" >
        <
        img src = { LIcon }
        alt = "Linkedin Icon"
        className = "licon" / > { " " } <
        /a>{" "} <
        /div>{" "} <
        div className = "item" >
        <
        a href = "#" >
        <
        img src = { GIcon }
        alt = "Github Icon"
        className = "gicon" / > { " " } <
        /a>{" "}

        <
        /div>{" "} <
        /footer>
    );
}

export default Footer;
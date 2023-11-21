import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Home.css";
import AboutImg from "../images/about.png";
import SkillImg from "../images/skill.jpg";
import ContactImg from "../images/cont.webp";


function Home() {
    const [activeNav, setActiveNav] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setActiveNav(location.pathname);
    }, [location]);

    return (

        <
        div className = "main" >
        <
        div className = { activeNav === "/About_us" ? "" : "about-section desktop" } >
        <
        Link to = "/About_us" > { " " } <
        img src = { AboutImg }
        alt = "Aboutme" / > { " " } <
        /Link>{" "} <
        /div>{" "} <
        div className = { activeNav === "/Skills" ? "" : "skills-section desktop" } >
        <
        Link to = "/Skills" > { " " } <
        img src = { SkillImg }
        alt = "Skills" / > { " " } <
        /Link>{" "} <
        /div>{" "} <
        div className = { activeNav === "/Contact" ? "" : "contact-section desktop" } >
        <
        Link to = "/Contact" > { " " } <
        img src = { ContactImg }
        alt = "Contact" / >
        <
        /Link>{" "} <
        /div>{" "} <
        footer >
        <
        p > Page is created by Lisha < /p> <
        /footer> <
        /div>
    );
}

export default Home;
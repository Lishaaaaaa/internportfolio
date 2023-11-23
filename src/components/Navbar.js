import React, { useEffect, useState } from "react";
import svgIcon from "../icon/Icons.svg";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [activeNav, setActiveNav] = useState(true);

    const location = useLocation();
    useEffect(() => {
        // console.log(setActiveNav);
        setActiveNav(location.pathname);
    }, [location]);

    const hamburger = (value) => {
        setMobileNavbar(value);
    };

    const hideHamburger = () => {
        setMobileNavbar(false);
    };

    const navcom = () => {
        setMobileNavbar(false);
    };

    return ( <
        nav >
        <
        div className = "navbar" >
        <
        div className = "desktop-nav" >
        <
        ul > { " " } {
            activeNav === "/" ? (
                " "
            ) : ( <
                li className = "desktop" >
                <
                Link to = { "/" } > Home < /Link>{" "} <
                /li>
            )
        } { " " } {
            activeNav === "/About_us" ? (
                " "
            ) : ( <
                li className = "desktop" >
                <
                Link to = "/About_us" > About < /Link>{" "} <
                /li>
            )
        } { " " } {
            activeNav === "/Skills" ? (
                " "
            ) : ( <
                li className = "desktop" >
                <
                Link to = "/Skills" > Skills < /Link>{" "} <
                /li>
            )
        } {
            activeNav === "/Contact" ? (
                " "
            ) : ( <
                li className = "desktop" >
                <
                Link to = "/Contact" > Contact < /Link>{" "} <
                /li>
            )
        } { " " } <
        /ul>{" "} <
        /div>{" "} <
        span className = "icon"
        style = {
            { display: mobileNavbar ? "none" : "block" } } >
        <
        img src = { svgIcon }
        onClick = {
            () => hamburger(true) }
        alt = "Hamburger Icon" /
        >
        <
        /span> {
            mobileNavbar ? ( <
                div className = "mobile-nav" >
                <
                div className = "clsbtn"
                onClick = { hideHamburger } >
                X { " " } <
                /div>{" "} <
                ul onClick = { navcom } > { " " } {
                    activeNav === "/" ? (
                        " "
                    ) : ( <
                        li >
                        <
                        Link to = { "/" } > Home < /Link>{" "} <
                        /li>
                    )
                } { " " } {
                    activeNav === "/About_us" ? (
                        " "
                    ) : ( <
                        li >
                        <
                        Link to = "/About_us" > About < /Link>{" "} <
                        /li>
                    )
                } { " " } {
                    activeNav === "/Skills" ? (
                        " "
                    ) : ( <
                        li >
                        <
                        Link to = { "/Skills" } > Skills < /Link>{" "} <
                        /li>
                    )
                } { " " } {
                    activeNav === "/Contact" ? (
                        " "
                    ) : ( <
                        li >
                        <
                        Link to = { "/Contact" } > Contact < /Link>{" "} <
                        /li>
                    )
                } { " " } <
                /ul>{" "} <
                /div>
            ) : (
                ""
            )
        } { " " } <
        /div>{" "} <
        /nav>
    );
}
export default Navbar;
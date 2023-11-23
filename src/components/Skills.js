import "../css/Skills.css";
import Html_logo from "../images/html_logo.png";
import Css_logo from "../images/css_logo.jpeg";
import Js_logo from "../images/js_logo.jpg";
import Git_logo from "../images/git_logo.jpg";
import React_logo from "../images/react_logo.jpg";

import Card from "./Card";

function Skills() {
    const skillP = [{
            id: 1,
            logo: Html_logo,
        },
        {
            id: 2,
            logo: Css_logo,
        },
        {
            id: 3,
            logo: Js_logo,
        },
        {
            id: 4,
            logo: Git_logo,
        },
        {
            id: 5,
            logo: React_logo,
        },
    ];

    return ( <
        div className = "parent" >
        <
        h2 className = "h2skills" > MY Skills < /h2>{" "} <
        div className = "skillimg" >

        {
            skillP.map((item) => ( <
                Card skill = { item }
                />
            ))
        } <
        /div> <
        /div>
    );
}
export default Skills;
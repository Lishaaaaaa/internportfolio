import "../css/Skills.css";
import Html_logo from "../images/html_logo.png";
import Css_logo from "../images/css_logo.jpeg";
import Java_logo from "../images/java.png";
import Git_logo from "../images/git_logo.jpg";
import React_logo from "../images/react_logo.jpg";
import C_logo from "../images/c.jpg";

import Card from "./Card";

function Skills() {
    const skillP = [{
            id: 1,
            logo: Html_logo,
            name: "HTML",
        },
        {
            id: 2,
            logo: Css_logo,
            name: "CSS",
        },
        {
            id: 3,
            logo: Java_logo,
            name: "Java",
        },

        {
            id: 4,
            logo: React_logo,
            name: "React",
        },
        {
            id: 5,
            logo: C_logo,
            name: "C",
        },
        {
            id: 6,
            logo: Git_logo,
            name: "Git",
        },
    ];

    return ( <
        div className = "skills-container" >
        <
        h2 className = "skills-heading" > MY SKILLS < /h2>{" "} <
        div className = "timeline" > { " " } {
            skillP.map((item, index) => ( <
                Card key = { item.id }
                skill = { item }
                position = { index % 2 === 0 ? "left" : "right" }
                />
            ))
        } { " " } <
        /div>{" "} < /
        div >
    );
}
export default Skills;
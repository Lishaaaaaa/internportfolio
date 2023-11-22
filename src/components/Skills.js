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
            //   h: "Hi",
            p: "HTML is a markup language used for structuring and presenting content on the World Wide Web. ",
            logo: Html_logo,
        },
        {
            id: 2,
            //   h: "Hello",
            p: "CSS is used to style the pages",
            logo: Css_logo,
        },
        {
            id: 3,
            //   h: "Bye",
            p: "JavaScript is a computer programming language used to make websites and applications dynamic and interactive.",
            logo: Js_logo,
        },
        {
            id: 4,
            //   h: "Bye",
            p: "Content 4",
            logo: Git_logo,
        },
        {
            id: 5,
            //   h: "Bye",
            p: "Content 5",
            logo: React_logo,
        },
    ];

    return ( <
        div >
        <
        h2 className = "h2skills" > MY Skills < /h2> <
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
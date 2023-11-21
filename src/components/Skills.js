import "../css/Skills.css";
import Html_logo from "../images/html_logo.png";
import Css_logo from "../images/css_logo.jpeg";
import Js_logo from "../images/js_logo.jpg";
import Git_logo from "../images/git_logo.jpg";
import React_logo from "../images/react_logo.jpg";

function Skills() {
    return ( <
        div className = "skillsbg" >
        <
        h2 className = "h2skills" > Skills < /h2>{" "} <
        div class = "skill" >
        <
        div className = "list1" > { " " } <
        img src = { Html_logo }
        alt = "HtmlLogo" / > { " " } <
        /div>{" "} <
        div className = "list1" > { " " } <
        img src = { Css_logo }
        alt = "CssLogo" / > { " " } <
        /div>{" "} <
        div className = "list1" >
        <
        img src = { Js_logo }
        alt = "JsLogo" / > { " " } <
        /div>{" "} <
        div className = "list1" > { " " } <
        img src = { Git_logo }
        alt = "GitLogo" / > { " " } <
        /div>{" "} <
        div className = "list1" > { " " } <
        img src = { React_logo }
        alt = "ReacttLogo" / > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Skills;
import "../css/About_us.css";
import myProfile from "../images/new.jpeg";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function About_us() {
    const [text] = useTypewriter({
        words: ["Passionate Learner", "Problem Solver", "Team Player "],
        loop: {},
        typeSpeed: 50,
        deleteSpeed: 50,
    });

    return ( <
        div className = "aboutcontent" >
        <
        h2 className = "h2about" > ABOUT ME < /h2>{" "} <
        div className = "content" >
        <
        div className = "left" >
        <
        h1 > Hello there! < /h1> I'm <strong>Lisha Carlo</strong > , a { " " } <
        strong >
        3 < sup > rd < /sup> year{" "} <
        /strong>
        student majoring in
        <
        strong > CS < /strong> at <strong>Canara Engineering College</strong > { " " }
        .I am passionate about < strong > Designing, Nature < /strong>{" "} <
        p >
        In my academic journey, I 've been fascinated by <strong></strong>{" "}
        and have actively sought opportunities to deepen my understanding.My goal is to be a < strong > Web Developer. < /strong>.{" "} <
        /p>{" "} <
        p > Here are a few things that define me: < /p>{" "} <
        span style = {
            { fontWeight: "bold", color: "yellow", fontSize: "35px" } } >
        { " " } { text } { " " } <
        /span>{" "} <
        span style = {
            { color: "red" } } >
        <
        Cursor cursorStyle = "|"
        cursorColor = "black" / >
        <
        /span>{" "} <
        p >
        I 'm excited about the possibilities that lie ahead, and I'
        m always open to new opportunities and collaborations. { " " } <
        /p>{" "} <
        p >
        Thank you
        for taking the time to get to know me a bit better.I look forward to connecting with you!
        <
        /p>{" "} <
        /div>{" "} <
        div className = "right" >
        <
        img src = { myProfile }
        alt = "My Profile Picture" / >
        <
        /div> <
        /div>{" "} <
        /div>
    );
}
export default About_us;
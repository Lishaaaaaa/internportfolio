import "../css/About_us.css";
import myProfile from "../images/new.jpeg";

function About_us() {
    return ( <
        div className = "aboutcontent" >
        <
        h2 className = "h2about" > ABOUT ME < /h2>{" "} <
        div className = "content" >
        <
        div className = "left" >
        <
        img src = { myProfile }
        alt = "My Profile Picture" / >
        <
        /div>{" "} <
        div className = "right" >
        <
        p >
        Hello there!
        <
        pre / > I 'm <strong>Lisha Carlo</strong>, a{" "} <
        strong >
        3 < sup > rd < /sup> year{" "} <
        /strong>
        student majoring in
        <
        strong > CS < /strong> at <strong>Canara Engineering College</strong > { " " }
        .I am passionate about < strong > Designing, Nature < /strong>{" "} <
        /p>{" "} <
        p >
        In my academic journey, I 've been fascinated by <strong></strong>{" "}
        and have actively sought opportunities to deepen my understanding.My goal is to be a < strong > Web Developer. < /strong>. I find joy in
        diving into new technologies and leveraging them to create meaningful and user - friendly web experiences. { " " } <
        /p>{" "} <
        p > Here are a few things that define me: < /p>{" "} <
        ul >
        <
        li >
        <
        strong > Passionate Learner: < /strong> I love diving into new
        topics and acquiring knowledge that challenges and expands my perspectives. { " " } <
        /li>{" "} <
        li >
        <
        strong > Problem Solver: < /strong> I enjoy tackling complex
        problems and finding innovative solutions. { " " } <
        /li>{" "} <
        li >
        <
        strong > Team Player: < /strong> Collaborating with others brings
        out the best in me.I value diverse perspectives and believe in the strength of teamwork. { " " } <
        /li>{" "} <
        /ul>{" "} <
        p >
        I 'm excited about the possibilities that lie ahead, and I'
        m always open to new opportunities and collaborations. { " " } <
        /p>{" "} <
        p >
        Thank you
        for taking the time to get to know me a bit better.I look forward to connecting with you!
        <
        /p>{" "} <
        /div>{" "}

        <
        /div>{" "} <
        /div>
    );
}
export default About_us;
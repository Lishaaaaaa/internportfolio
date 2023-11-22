import About_us from "./About_us";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
import "../css/Home.css";

function Home() {
    return ( <
        div >
        <
        div className = "home" >
        <
        div className = "main" >
        <
        h1 className = "headings" > { " " }
        I AM, < br / > LISHA CARLO { " " } <
        /h1>{" "} <
        /div>{" "} <
        /div>{" "} <
        About_us / >
        <
        Skills / >
        <
        Contact / >
        <
        Footer / >
        <
        /div>
    );
}

export default Home;
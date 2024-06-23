import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/About_us"
        element = { < About_us / > }
        />{" "} <
        Route path = "/Projects"
        element = { < Projects / > }
        />{" "} <
        Route path = "/Skills"
        element = { < Skills / > }
        />{" "} <
        Route path = "/Contact"
        element = { < Contact / > }
        />{" "} <
        /Routes>{" "} <
        Footer / >
        <
        /BrowserRouter>{" "} <
        /div>
    );
}

export default App;

//git pull origin main(main is branch name)
//git push origin main or master

//git pull origin main
//git status
//git add .
//git git commit -m "message"
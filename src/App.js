import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// function HideCarousel() {
//   const location = useLocation();

//   return (
//     <div>
//       {location.pathname !== "/Contact" && (
//         /* The following content will be displayed if the current route is not "/contact" */
//         <Carousel />
//       )}
//     </div>
//   );
// }
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
        Route path = "/Contact"
        element = { < Contact / > }
        />{" "} <
        Route path = "/Skills"
        element = { < Skills / > }
        />{" "} <
        /Routes>{" "} { /* <HideCarousel /> */ } { /* <Footer /> */ }

        <
        /BrowserRouter>{" "} <
        /div>
    );
}

export default App;
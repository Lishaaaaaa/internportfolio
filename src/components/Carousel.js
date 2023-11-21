import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Carousel.css";
import bg2 from "../images/bg2.jpg";
import lake from "../images/lake.jpg";
import bird from "../images/bird.jpeg";
import webp from "../images/background.webp";
import red from "../images/images.jpeg";
import Contact from "./Contact";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevbtn = () => {
        setCurrentIndex((currentIndex - 1 + 5) % 5); // 5 is the number of images
    };

    const nextbtn = () => {
        setCurrentIndex((currentIndex + 1) % 5); // 5 is the number of images
    };

    const boxStyle = {
        transform: `translateX(${-currentIndex * 100}%)`, // Assuming each image takes 100% width
        transition: "transform 0.5s ease",
    };

    return ( <
        div id = "myCarousel"
        className = "carousel" >
        <
        button className = "prevbtn"
        onClick = { prevbtn } > { " " } <
        p > { "<" } < /p>{" "} <
        /button>{" "} <
        button className = "nextbtn"
        onClick = { nextbtn } > { " " } <
        p > { ">" } < /p>{" "} <
        /button>{" "} <
        div className = "carousel-inner"
        style = { boxStyle } >
        <
        div className = "carousel-item" >
        <
        img src = { bg2 }
        alt = "Slide 1" / >
        <
        /div>{" "} <
        div className = "carousel-item" >
        <
        img src = { lake }
        alt = "Slide 2" / >
        <
        /div>{" "} <
        div className = "carousel-item" >
        <
        img src = { bird }
        alt = "Slide 3" / >
        <
        /div>{" "} <
        div className = "carousel-item" >
        <
        img src = { webp }
        alt = "Slide 4" / >
        <
        /div>{" "} <
        div className = "carousel-item" >
        <
        img src = { red }
        alt = "Slide 5" / >
        <
        /div>{" "} <
        /div>{" "}


        <
        /div> 
    );
};

export default Carousel;
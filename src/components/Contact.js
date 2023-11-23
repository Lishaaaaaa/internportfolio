import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import "../css/Contact.css";


function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async(e) => {
        e.preventDefault();

        // Show loader
        setIsLoading(true);

        emailjs
            .sendForm(
                "service_r2dfdde",
                "template_0mj7ezl",
                form.current,
                "ElX9fZkifbbc2tNT4"
            )

        .then(
            (result) => {
                console.log(result.text);
                setIsLoading(false);
                alert("Form Submitted");
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return ( <
        div className = "formele" >
        <
        form ref = { form }
        onSubmit = { sendEmail } >
        <
        h2 className = "contacth2" > Contact Form < /h2> <label> Name: </label > { " " } <
        input type = "text"
        name = "name" / > < br / >
        <
        label > Email: < /label> <input type="email" name="email" / > < br / >
        <
        label > Message: < /label> <input type="message" name="message" / > < br / >
        <
        label > Address: < /label> <textarea name="address"> </textarea > { " " } {
            isLoading ? ( <
                Loader / >
            ) : ( <
                button type = "submit"
                className = "btn" > { " " }
                Submit { " " } <
                /button>
            )
        } { " " } <
        br / >
        <
        button type = "reset"
        className = "reset"
        value = "Reset" > { " " }
        Reset { " " } <
        /button>{" "} <
        /form>{" "}

        <
        /div>
    );
}

export default Contact;
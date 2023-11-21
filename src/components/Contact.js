import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import "../css/Contact.css";

function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = async(e) => {
        e.preventDefault();

        // Show loader
        setIsLoading(true);

        try {
            await emailjs.sendForm(
                "service_r2dfdde",
                "template_0mj7ezl",
                form.current,
                "ElX9fZkifbbc2tNT4"
            );

            setIsSubmitted(true);

        } catch (error) {
            console.error(error.text);
        } finally {
            // Hide loader
            setIsLoading(false);
        }
    };

    return ( <
        div className = "success" > {
            isSubmitted ? ( <
                div className = "message" >
                <
                p > Submitted successfully < /p>

                <
                /div>
            ) : ( <
                div className = "formele" >
                <
                form ref = { form }
                onSubmit = { sendEmail } >
                <
                label > Name: < /label> <
                input type = "text"
                name = "name" / > < br / >
                <
                label > Email: < /label> <
                input type = "email"
                name = "email" / > < br / >
                <
                label > Message: < /label> <
                input type = "message"
                name = "message" / > < br / >
                <
                label > Address: < /label> <
                textarea name = "address" > < /textarea> <
                input type = "submit"
                name = "submit"
                value = "Send" / >
                <
                br / >
                <
                input type = "reset"
                name = "submit"
                value = "Reset" / >
                <
                /form> <
                /div>
            )
        } { isLoading && < Loader / > } <
        /div>
    );
}

export default Contact;
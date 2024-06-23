import "../css/Projects.css";

function Projects() {
    return ( <
        div className = "project-container" >
        <
        h2 className = "heading" > PROJECTS < /h2>{" "} <
        div className = "project-card-1" >
        <
        a href = "https://showsnow.onrender.com/" >
        <
        div className = "project-image_one" > < /div>{" "} <
        div className = "project-info" >
        <
        h3 > Shows Now < /h3>{" "} <
        p > { " " }
        A movie ticket booking website using Node.js and MongoDB to provide users with a seamless and intuitive platform
        for browsing and booking movie tickets. { " " } <
        /p>{" "} <
        /div>{" "} <
        /a>{" "} <
        /div>{" "} <
        div className = "project-card-2" >
        <
        a href = "#" >
        <
        div className = "project-image_two" > < /div>{" "} <
        div className = "project-info" >
        <
        h3 > Quiz Whiz < /h3>{" "} <
        p > { " " }
        Developed an amazing Quiz Management System allowing users to manage, and participate in multiple quizzes across various categories. { " " } <
        /p>{" "} <
        /div>{" "} <
        /a>{" "} <
        /div>{" "} <
        div className = "project-card-3" >
        <
        a href = "/" >
        <
        div className = "project-image_three" > < /div>{" "} <
        div className = "project-info" >
        <
        h3 > Recipe Blog < /h3>{" "} <
        p > { " " }
        Developed a dynamic and user - friendly Recipe Blog Website to share and discover a wide variety of recipes. { " " } <
        /p>{" "} <
        /div>{" "} <
        /a>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Projects;
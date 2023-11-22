function Card({ skill }) {
    return ( <
        div className = "card" > { /* <h1> {skill.h} </h1>  */ } {
            /* <div className="pcontent">
                  <p> {skill.p} </p>
                  </div> */
        }

        <
        img src = { skill.logo }
        />{" "} <
        /div>
    );
}
export default Card;
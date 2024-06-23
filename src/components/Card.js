function Card({ skill, position }) {
  return (
    <div className={`card ${position}`}>
      <div className="card-content">
        <img src={skill.logo} alt={`${skill.name} logo`} />
        <p className="skill-name">{skill.name}</p>
      </div>
    </div>
  );
}
export default Card;

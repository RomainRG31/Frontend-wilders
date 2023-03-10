import axios from "axios";
import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";
import "./WilderCard.css";

const WilderCard = ({ name, skills, id, fetchData }) => {
  const handleDeleteClick = async () => {
    await axios.delete(`http://localhost:5000/api/wilder/${id}`);

    fetchData();
  };

  return (
    <article className="card">
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </ul>
      <button onClick={handleDeleteClick}>Delete</button>
    </article>
  );
};

export default WilderCard;

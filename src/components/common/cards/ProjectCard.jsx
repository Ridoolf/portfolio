import { useState } from "react";
import "./ProjectCard.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  url,
  urlGit,
}) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="card_container">
      <div className="img_container">
        <img src={image} />
      </div>
      <div className="desc_container">
        <div className="container_responsive">
          <h4>{title}</h4>
          {showInfo ? (
            <button className="arrow" onClick={toggleInfo}>
              <KeyboardArrowUpIcon />
            </button>
          ) : (
            <button className="arrow" onClick={toggleInfo}>
              <KeyboardArrowDownIcon />
            </button>
          )}
        </div>
        <div className={`info ${showInfo ? "open" : ""}`}>
          <p className="description">{description}</p>
          <ul className="technologies">
            <li>Development with:</li>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="btn_container">
            <a href={url} target="_blank" className="visitSite_container">
              Visit site <OpenInNewIcon />
            </a>
            <a href={urlGit} target="_blank" className="githublink_container">
              GitHub <OpenInNewIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

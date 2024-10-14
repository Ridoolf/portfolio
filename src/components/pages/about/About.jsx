import "./About.css";
import photo from "../../../assets/profile.png";
import { BtnDownload } from "../../common/btnDownload/BtnDownload";

export const About = () => {
  return (
    <div className="aboutme_container">
      <div className="img">
        <img src={photo} alt="" />
      </div>
      <div className="aboutme">
        <h3>About Me : </h3>
        <p>
          I’m Lucas, a <span className="dev"> Frontend Developer</span>{" "}
          specialized in <span className="react">React. </span>
          I’m passionate about building modern and functional user interfaces,
          always looking to learn and improve to deliver efficient solutions.
        </p>
        <BtnDownload
          title={"CV"}
          src={"src/assets/cv.pdf"}
          downloadTitle="LucasRidolfi_CV"
        />
      </div>
    </div>
  );
};

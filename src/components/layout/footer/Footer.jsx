import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="contact_footer">
        <a href="https://github.com/Ridoolf" target="_blank">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasridolfi"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/ridoolf/?hl=es" target="_blank">
          <InstagramIcon />
        </a>
      </div>
      <div className="copy">
        © 2015 - 2025 Lucas Ridolfi All Rights Reserved.
      </div>
    </div>
  );
};

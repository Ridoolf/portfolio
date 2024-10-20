import { BtnDownload } from "../../common/btnDownload/BtnDownload";
import "./Skills.css";

export const Skills = () => {
  const skillsList = [
    {
      title: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      title: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: "ReactJS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      title: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      title: "SQLite3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
    {
      title: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
  ];

  const certificatesList = [
    {
      certificateTitle: "Web Developer",
      academy: "CoderHouse",
      certificateImg: "src/assets/certificates_skills/dw.png",
      downloadTitle: "LucasRidolfi_WebDeveloperCertificate",
    },
    {
      certificateTitle: "JavaScript",
      academy: "CoderHouse",
      certificateImg: "src/assets/certificates_skills/js.png",
      downloadTitle: "LucasRidolfi_JavaScriptCertificate",
    },
    {
      certificateTitle: "ReactJS",
      academy: "CoderHouse",
      certificateImg: "src/assets/certificates_skills/reactJS.png",
      downloadTitle: "LucasRidolfi_ReactJSCertificate",
    },
  ];

  return (
    <div className="main_skills_container">
      <h3>Skills</h3>
      <div className="skills_container">
        {skillsList.map(({ title, logo }) => (
          <div className="skill_container">
            <img src={logo} alt={title} />
            <div className="line"></div>
            <h4>{title}</h4>
          </div>
        ))}
      </div>
      <h3>Certificates</h3>
      <div className="certificates_container">
        {certificatesList.map(
          ({ certificateTitle, academy, certificateImg, downloadTitle }) => (
            <div className="certificate_container">
              <h4 className="certificate_item title">{certificateTitle}</h4>
              <p className="certificate_item p">from {academy}</p>
              <BtnDownload
                className="certificate_item"
                title="certificate"
                downloadTitle={downloadTitle}
                src={certificateImg}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

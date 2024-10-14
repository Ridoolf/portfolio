import ProjectCard from "../../common/cards/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "To Do List ",
      description:
        "A React-based task list app that allows users to add, mark as completed, and delete tasks, with persistent storage using localStorage to retain tasks after page reloads.",
      image: "src/assets/projects/toDo.png",
      technologies: ["React", "CSS", "MUI"],
      url: "https://www.google.com",
      urlGit: "https://github.com/Ridoolf/ToDoList",
    },
    {
      title: "Valorant Insider ",
      description:
        "A community platform for Valorant players, where they can share clips, post messages, and access detailed game information using HTML, CSS, JavaScript, and the Valorant API.",
      image: "src/assets/projects/valoInsider.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://www.google.com",
      urlGit: "https://github.com/Ridoolf/valorant-insider",
    },
    {
      title: "PokeDex ",
      description:
        "An interactive Pokédex developed with HTML, CSS, and JavaScript, allowing users to search and view information about different Pokémon dynamically.",
      image: "src/assets/projects/pokeDex.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://www.google.com",
      urlGit: "https://github.com/Ridoolf/pokedex",
    },

    {
      title: "Login ",
      description:
        "Python console application that allows users to register, log in, and store credentials in a JSON file. It includes data validation and an interactive menu for managing users.",
      image: "src/assets/projects/login.png",
      technologies: ["Python"],
      url: "https://www.google.com",
      urlGit:
        "https://github.com/Ridoolf/login-python/blob/main/pre-entrega1.py",
    },
  ];

  return (
    <div className="projects_container">
      <h3 className="title">Projects</h3>
      {projects.map((projects, index) => (
        <ProjectCard
          key={index}
          title={projects.title}
          description={projects.description}
          image={projects.image}
          technologies={projects.technologies}
          url={projects.url}
          urlGit={projects.urlGit}
        />
      ))}
    </div>
  );
};

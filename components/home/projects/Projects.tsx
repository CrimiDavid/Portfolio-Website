import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Code Genius",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["Next.js", "Flask", "PostgreSQL", "Tailwind CSS"],
    description:
      "An AI-driven code annotation tool that parses and analyzes code files to provide detailed explanations, readability scores, and context-aware suggestions.",
    modalContent: (
      <>
        <p>
          Developed CodeGenius, an AI-driven code annotation tool to enhance code comprehension and maintainability for developers.
        </p>
        <p>
          Integrated Next.js, Tailwind CSS, and Flask to create a seamless frontend and backend system. Leveraged Groq and Llama models for accurate code analysis and implemented solutions for JSON data compatibility and LLM accuracy challenges.
        </p>
        <p>
          Implemented robust user authentication by integrating a PostgreSQL database, ensuring secure storage and management of user credentials.
        </p>
      </>
    ),
  },
  {
    title: "Six Degrees of Kevin Bacon",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["Java", "Neo4j"],
    description:
      "A backend Java project designed to manage actor and movie information using a Neo4j database.",
    modalContent: (
      <>
        <p>
          Worked in a team to develop a backend Java project that manages actor and movie information using a Neo4j database.
        </p>
        <p>
          Implemented RESTful API endpoints to handle HTTP GET and PUT requests, including a unique feature to compute the shortest path between any actor and Kevin Bacon, showcasing advanced graph traversal and pathfinding capabilities.
        </p>
      </>
    ),
  },
  {
    title: "Alien Invaders Game",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["Python", "Pytest"],
    description:
      "A 2D arcade-style game developed using Python and the Pygame library.",
    modalContent: (
      <>
        <p>
          Developed a 2D arcade-style game featuring real-time collision detection, sprite management, and dynamic object interactions to simulate a spaceship defending against alien invasions.
        </p>
        <p>
          Implemented gameplay mechanics including directional ship control, bullet firing system, and adaptive alien fleet behaviors with edge detection, enhancing user engagement and challenge.
        </p>
      </>
    ),
  },
  {
    title: "Optimal Uber Finder",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["React", "Flask"],
    description:
      "A dynamic web application that allows users to search for the most cost-effective Uber prices.",
    modalContent: (
      <>
        <p>
          Developed a dynamic web application using React and Flask, resulting in an average user cost saving of 30%.
        </p>
        <p>
          Integrated Uber API and Mapbox API to create a platform that enables users to search for the most cost-effective Uber prices based on their location and a specified radius.
        </p>
        <p>
          Implemented a geospatial algorithm to divide a user-defined radius into grids, assigning coordinates at each grid’s center, and utilized Mapbox API to fetch and compare real-time pricing data.
        </p>
      </>
    ),
  },
  {
    title: "Advanced Process Scheduler Simulation",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["C"],
    description:
      "A comprehensive system scheduler simulator developed using C.",
    modalContent: (
      <>
        <p>
          Developed and implemented a comprehensive system scheduler simulator utilizing FCFS, RR, and SJF algorithms.
        </p>
        <p>
          Managed process states using multiple queues and produced detailed output files capturing process states, CPU utilization, and turnaround times.
        </p>
        <p>
          Enhanced code modularity and maintainability by organizing functionalities into distinct modules, promoting code reusability and streamlined debugging.
        </p>
      </>
    ),

  },
    {
    title: "Three Musketeers",
    imgSrc: "",
    code: "", // Update this with your GitHub link if desired
    projectLink: "",
    tech: ["Java", "Javafx"],
    description:
      "A 2D arcade-style board game.",
    modalContent: (
      <>
        <p>
          Developed a 2D arcade-style game featuring real-time collision detection, sprite management, and dynamic object interactions to simulate a spaceship defending against alien invasions.
        </p>
        <p>
          Implemented gameplay mechanics including directional ship control, bullet firing system, and adaptive alien fleet behaviors with edge detection, enhancing user engagement and challenge.
        </p>
      </>
    ),
  },
];

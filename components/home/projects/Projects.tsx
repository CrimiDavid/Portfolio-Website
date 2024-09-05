import { SectionHeader } from '@/components/utils/SectionHeader'
import { Project } from './Project'
import styles from './projects.module.scss'

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Code Genius',
    imgSrc: '/project-imgs/CodeGenius.png',
    code: 'https://github.com/MatthewFrieri/HackThe6ix-CodeGenius',
    projectLink: '',
    tech: ['Next.js', 'Flask', 'PostgreSQL', 'Tailwind CSS'],
    description:
      'An AI-driven code annotation tool that parses and analyzes code files to provide detailed explanations, readability scores, and context-aware suggestions.',
    modalContent: (
      <>
        <p>
          Developed CodeGenius, an AI-driven code annotation tool to enhance
          code comprehension and maintainability for developers.
        </p>
        <p>
          Integrated Next.js, Tailwind CSS, and Flask to create a seamless
          frontend and backend system. Leveraged Groq and Llama models for
          accurate code analysis and implemented solutions for JSON data
          compatibility and LLM accuracy challenges.
        </p>
        <p>
          Implemented robust user authentication by integrating a PostgreSQL
          database, ensuring secure storage and management of user credentials.
        </p>
      </>
    ),
  },
  {
    title: 'Six Degrees of Kevin Bacon',
    imgSrc: '',
    code: '',
    projectLink: '',
    tech: ['Java', 'Neo4j'],
    description:
      'A backend Java project designed to manage actor and movie information using a Neo4j database.',
    modalContent: (
      <>
        <p>
          Worked in a team to develop a backend Java project that manages actor
          and movie information using a Neo4j database.
        </p>
        <p>
          Implemented RESTful API endpoints to handle HTTP GET and PUT requests,
          including a unique feature to compute the shortest path between any
          actor and Kevin Bacon, showcasing advanced graph traversal and
          pathfinding capabilities.
        </p>
      </>
    ),
  },
  {
    title: 'Alien Invaders Game',
    imgSrc: '/project-imgs/alien.png',
    code: 'https://github.com/CrimiDavid/Ai-Invaders',
    projectLink: '',
    tech: ['Python', 'Pytest'],
    description:
      'A 2D arcade-style game developed using Python and the Pygame library.',
    modalContent: (
      <>
        <p>
          Developed a 2D arcade-style game featuring real-time collision
          detection, sprite management, and dynamic object interactions to
          simulate a spaceship defending against alien invasions.
        </p>
        <p>
          Implemented gameplay mechanics including directional ship control,
          bullet firing system, and adaptive alien fleet behaviors with edge
          detection, enhancing user engagement and challenge.
        </p>
      </>
    ),
  },
  {
    title: 'Optimal Uber Finder',
    imgSrc: '/project-imgs/charon.png',
    code: 'https://github.com/Geri0704/Charon',
    projectLink: '',
    tech: ['React', 'Flask'],
    description:
      'A dynamic web application that allows users to search for the most cost-effective Uber prices.',
    modalContent: (
      <>
        <p>
          Developed a dynamic web application using React and Flask, resulting
          in an average user cost saving of 30%.
        </p>
        <p>
          Integrated Uber API and Mapbox API to create a platform that enables
          users to search for the most cost-effective Uber prices based on their
          location and a specified radius.
        </p>
        <p>
          Implemented a geospatial algorithm to divide a user-defined radius
          into grids, assigning coordinates at each grid’s center, and utilized
          Mapbox API to fetch and compare real-time pricing data.
        </p>
      </>
    ),
  },
  {
    title: 'Advanced Process Scheduler Simulation',
    imgSrc: '/project-imgs/Scheduler.png',
    code: 'https://github.com/CrimiDavid/Process-Scheduler', // Update this with your GitHub link if desired
    projectLink: '',
    tech: ['C'],
    description:
      'A comprehensive system scheduler simulator developed using C.',
    modalContent: (
      <>
        <p>
          Developed and implemented a comprehensive system scheduler simulator
          utilizing FCFS, RR, and SJF algorithms.
        </p>
        <p>
          Managed process states using multiple queues and produced detailed
          output files capturing process states, CPU utilization, and turnaround
          times.
        </p>
        <p>
          Enhanced code modularity and maintainability by organizing
          functionalities into distinct modules, promoting code reusability and
          streamlined debugging.
        </p>
      </>
    ),
  },
  {
    title: 'Three Musketeers',
    imgSrc: '/project-imgs/threeMusk.png',
    code: '', // Update this with your GitHub link if desired
    projectLink: '',
    tech: ['Java', 'Javafx'],
    description:
      'A Java-based implementation of the strategic board game "Three Musketeers", providing a seamless gaming experience with AI opponents, various gameplay modes, and a dynamic GUI built using JavaFX.',
    modalContent: (
      <>
        <p>
          Developed multiple gameplay modes, the game supports both Human vs
          Human and Human vs AI modes. The AI includes a RandomAgent, which
          makes random moves, and a GreedyAgent, which evaluates and selects
          optimal moves, offering varied levels of challenge.
        </p>
        <p>
          Built with JavaFX, the game features an easy-to-navigate user
          interface with clickable board cells for selecting and making moves.
          Players receive real-time feedback on valid moves and can save/load
          game states, making the gameplay experience smooth and user-friendly.
        </p>
        <p>
          The project follows S.O.L.I.D principles, which ensure that the
          codebase is maintainable, scalable, and easy to extend. By organizing
          the system into well-defined classes and abstractions, it promotes
          flexibility for future development while preserving the integrity of
          the existing functionality. This design approach also ensures that
          each component is modular, reducing the impact of changes and allowing
          for new features or modifications to be seamlessly integrated.
        </p>
      </>
    ),
  },
]

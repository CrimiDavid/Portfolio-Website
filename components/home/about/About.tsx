import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import Skills from "./Stats"; // Adjust the path as necessary
import styles from "./about.module.scss";

export const About = () => {
  return (
      <section id="about" className="section-wrapper">
        <SectionHeader title="About" dir="l" />
        <div className={styles.about}>
          <div className="w-full lg:w-3/4 pr-4">
            <Reveal>
              <p className={styles.aboutText}>
              Hey! I&apos;m David and I am a Software Develeloper. I am currently in my fouth year of univerisry, I love learining technology that
              is highly used and relevent in the workplace and am always eagar to learn now things
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                My skills include HTML, CSS, JavaScript, and various frontend frameworks like React and Vue.js.
                I&apos;ve also worked with backend technologies like Node.js, Firebase, MongoDB and PHP/Laravel, allowing me to build full-stack applications.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                When I&apos;m not coding, I enjoy digital painting.
                I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
                If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
                🔗
              </p>
            </Reveal>
            <Reveal>
              <div className={styles.links}>
                <MyLinks />
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/4 h-screen pl-4">
            <Reveal>
              <Skills />
            </Reveal>
          </div>
        </div>
      </section>
  );
};

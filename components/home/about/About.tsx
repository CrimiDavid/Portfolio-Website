import { MyLinks } from '@/components/nav/components/MyLinks'
import { Reveal } from '@/components/utils/Reveal'
import { SectionHeader } from '@/components/utils/SectionHeader'
import Skills from './Stats' // Adjust the path as necessary
import styles from './about.module.scss'

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div className="w-full lg:w-3/4 pr-4">
          <Reveal>
            <p className={styles.aboutText}>
              Hello! I&apos;m David Crimi, a passionate and dedicated software
              developer with a strong foundation in computer science and a keen
              interest in backend development, full-stack projects, and
              AI-driven technologies. Currently pursuing my B.Sc. in Computer
              Science at York University, I have consistently sought out
              opportunities to deepen my knowledge and hone my skills, both
              through formal education and hands-on projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My technical expertise spans across several programming languages
              including Python, Java, and C, and I&apos;m proficient in using
              frameworks like React, Flask, and Next.js. I&apos;ve also worked
              extensively with databases such as PostgreSQL and Neo4j, and
              I&apos;m comfortable navigating complex systems and solving
              challenging problems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              In addition to my technical projects, I&apos;m also an AWS
              Certified Developer Associate and have completed the Meta Backend
              Developer certification through Coursera. These certifications
              highlight my commitment to staying at the forefront of industry
              standards and best practices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Whether it&apos;s developing a new game in Python, creating
              complex scheduling algorithms in C, or building dynamic web
              applications with React, I&apos;m driven by a passion for coding
              and a desire to make an impact through technology.
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
  )
}

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
                Hello! I&apos;m David Crimi, a passionate software developer with a strong
                foundation in computer science and expertise in backend development,
                full-stack applications, and cloud technologies. I recently completed my
                B.Sc. in Computer Science with Honors from York University and am currently
                working as a Software Analyst Intern at Hitachi Rail.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                My technical expertise spans multiple programming languages including Python,
                Java, C++, and JavaScript. I&apos;m proficient with modern frameworks such as
                React, Django, Flask, and Next.js, and have experience working with various
                databases including PostgreSQL, MySQL, MongoDB, and Neo4j. I&apos;m particularly
                interested in building scalable systems and implementing efficient DevOps practices.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I&apos;ve developed several impactful projects, including Impactify—an IoT-based
                brain health monitoring system for contact sports that won first place at Hack
                the Valley among 400 participants. I also created a Six Degrees of Kevin Bacon
                application using Neo4j, demonstrating advanced graph traversal algorithms, and
                an Optimal Uber Finder application that uses geospatial algorithms to save users
                an average of 30% on ride costs.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                As an AWS Certified Developer Associate and Meta Backend Developer certificate
                holder, I&apos;m committed to industry best practices and continuous learning.
                At Hitachi Rail, I&apos;ve improved CI/CD pipelines using Jenkins and Docker,
                achieving a 40% reduction in build execution time while enhancing system stability
                and documentation.
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
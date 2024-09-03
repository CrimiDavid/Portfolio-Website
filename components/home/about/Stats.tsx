import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './stats.module.scss'
import HTMLImage from '../../../public/stats-images/HTML.png'
import CSSImage from '../../../public/stats-images/CSS.png'
import JSImage from '../../../public/stats-images/JS.png'
import ReactImage from '../../../public/stats-images/REACT.png'
import FlaskImage from '../../../public/stats-images/FLASK.png'
import PythonImage from '../../../public/stats-images/PYTHON.png'
import JavaImage from '../../../public/stats-images/JAVA.png'
import AWSImage from '../../../public/stats-images/AWS.png'
import DjangoImage from '../../../public/stats-images/DJANGO.png'
import CImage from '../../../public/stats-images/C.png'
import NextImage from '../../../public/stats-images/NEXT.png'
import GitImage from '../../../public/stats-images/GIT.png'
import JunitImage from '../../../public/stats-images/JUNIT.png'
import AndroidImage from '../../../public/stats-images/ANDROID.png'
import MySQLImage from '../../../public/stats-images/MYSQL.png'
import PostImage from '../../../public/stats-images/POST.png'
import NeoImage from '../../../public/stats-images/NEO.png'
import PandaImage from '../../../public/stats-images/PANDA.png'
import NumpyImage from '../../../public/stats-images/NP.png'
import MatplotlibImage from '../../../public/stats-images/MP.png'
import SkImage from '../../../public/stats-images/SK.png'

// Define the Skill type
interface Skill {
  name: string
  category: string
  imageUrl: StaticImageData
}

const skillsData: Skill[] = [
  { name: 'HTML', category: 'Front-End', imageUrl: HTMLImage },
  { name: 'CSS', category: 'Front-End', imageUrl: CSSImage },
  { name: 'JavaScript', category: 'Front-End', imageUrl: JSImage },
  { name: 'React', category: 'Front-End', imageUrl: ReactImage },
  { name: 'Flask', category: 'Back-End', imageUrl: FlaskImage },
  { name: 'Python', category: 'Back-End', imageUrl: PythonImage },
  { name: 'Java', category: 'Back-End', imageUrl: JavaImage },
  { name: 'AWS', category: 'Misc.', imageUrl: AWSImage },
  { name: 'Django', category: 'Back-End', imageUrl: DjangoImage },
  { name: 'C', category: 'Back-End', imageUrl: CImage },
  { name: 'Next,js', category: 'Front-End', imageUrl: NextImage },
  { name: 'Git', category: 'Misc.', imageUrl: GitImage },
  { name: 'JUnit', category: 'Misc.', imageUrl: JunitImage },
  { name: 'Android Studio', category: 'Misc.', imageUrl: AndroidImage },
  { name: 'MySQL', category: 'Back-End', imageUrl: MySQLImage },
  { name: 'Postgre SQL', category: 'Back-End', imageUrl: PostImage },
  { name: 'Neo4j', category: 'Back-End', imageUrl: NeoImage },
  { name: 'Numpy', category: 'Misc.', imageUrl: NumpyImage },
  { name: 'Pandas', category: 'Misc.', imageUrl: PandaImage },
  { name: 'Matplotlib', category: 'Misc.', imageUrl: MatplotlibImage },
  { name: 'Scikit-learn', category: 'Misc.', imageUrl: SkImage },
]

const Skills: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({
    'Front-End': false,
    'Back-End': false,
    'Misc.': false,
  })

  const handleFilterChange = (category: string) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }))
  }

  const filteredSkills = skillsData.filter(
    (skill) =>
      (filters['Front-End'] && skill.category === 'Front-End') ||
      (filters['Back-End'] && skill.category === 'Back-End') ||
      (filters['Misc.'] && skill.category === 'Misc.') ||
      (!filters['Front-End'] && !filters['Back-End'] && !filters['Misc.'])
  )

  return (
    <div
      className={`${styles.skillsSection} w-full flex flex-col items-center justify-start p-6`}
    >
      <div className={`${styles.filters} mb-6`}>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters['Front-End']}
            onChange={() => handleFilterChange('Front-End')}
            className="mr-3"
          />
          Front-End
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters['Back-End']}
            onChange={() => handleFilterChange('Back-End')}
            className="mr-3"
          />
          Back-End
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters['Misc.']}
            onChange={() => handleFilterChange('Misc.')}
            className="mr-3"
          />
          Misc.
        </label>
      </div>
      <div className="skills-container grid grid-cols-2 gap-4 max-h-96 overflow-y-scroll">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <Image
              src={skill.imageUrl}
              alt={skill.name}
              className={styles.skillImage}
              width={50}
              height={50}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

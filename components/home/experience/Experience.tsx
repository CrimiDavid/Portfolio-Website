import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience and Certifications" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Software Analyst Intern",
    position: "Hitachi Rail",
    time: "January 2025 - present",
    location: "Toronto, Ontario",
    description:
        "Developed a high-performance CI/CD pipeline in Jenkins utilizing Docker containerization, achieving a 40% reduction in build execution time.\n• Performed systematic troubleshooting and strategic refactoring of critical deployment scripts, substantially improving system stability and operational reliability.\n• Authored comprehensive company documentation.",
    tech: ["Jenkins", "Docker", "CI/CD", "Deployment Scripts", "Technical Documentation"],
  },
  {
    title: "Certified Developer Associate - DVA-C02",
    position: "AWS",
    time: "June 2024 - June 2027",
    cert: "Credential ID: 3eb8006f8928489a851a76752a449786",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Elastic Beanstalk",
      "Amazon S3",
      "Amazon EFS",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Route 53",
      "Amazon Cognito",
      "Etc..."
    ],
  },
  {
    title: "Meta Backend Developer",
    position: "Coursera",
    time: "",
    cert: "",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
    tech: ["Python", "Django", "React", "API's", "Git", "HTML", "CSS" , "Bootstrap"],
  },


];

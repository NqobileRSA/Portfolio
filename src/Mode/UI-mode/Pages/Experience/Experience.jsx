import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import "./Experience.css";
import { Tabs } from "@mantine/core";

const Experience = () => {
  const experienceData = [
    {
      title: "Web Designer",
      role: "Web Designer",
      company: "Amazon",
      duration: "Jan 2020 - Dec 2020",
      responsibilities: [
        "Designed and developed responsive web pages for Amazon's e-commerce platform.",
        "Collaborated with cross-functional teams to ensure design consistency and brand adherence.",
        "Optimized user experience through A/B testing and data analysis.",
      ],
    },
    {
      title: "Frontend Developer",
      role: "Frontend Developer",
      company: "Google",
      duration: "May 2018 - Dec 2019",
      responsibilities: [
        "Built and maintained complex web applications using React and Angular.",
        "Implemented best practices for performance optimization and accessibility.",
        "Contributed to the development of reusable UI components and libraries.",
      ],
    },
    {
      title: "UI/UX Designer",
      role: "UI/UX Designer",
      company: "Apple",
      duration: "Aug 2016 - Feb 2018",
      responsibilities: [
        "Designed intuitive and visually appealing user interfaces for Apple's software products.",
        "Conducted user research and usability testing to inform design decisions.",
        "Collaborated with product managers and developers to ensure seamless implementation.",
      ],
    },
    {
      title: "Software Engineer Intern",
      role: "Software Engineer Intern",
      company: "Microsoft",
      duration: "May 2015 - Aug 2015",
      responsibilities: [
        "Assisted in the development and maintenance of internal web applications.",
        "Participated in code reviews and learned best coding practices.",
        "Gained hands-on experience with agile development methodologies.",
      ],
    },
  ];

  return (
    <section className="experience container">
      <Tabs orientation="vertical" defaultValue="xp">
        <Tabs.List>
          {experienceData.map((experience, index) => (
            <Tabs.Tab key={index} value={`xp-${index}`}>
              {experience.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {experienceData.map((experience, index) => (
          <Tabs.Panel key={index} value={`xp-${index}`}>
            <ExperienceCard experience={experience} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </section>
  );
};

export default Experience;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArchiveCard } from "../../components/components";
import "./Archives.css";
const Archives = () => {
  const archiveData = [
    {
      title: "Educare Engligh Learning Academy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.educareenglishlearningacademy.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    {
      title: "ReactBD web development company",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      listItems: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://reactbd.com/",
    },
    // Add more objects for the remaining archives
  ];
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="archive-container" id="archives">
      <div className="archive-header">
        <h2 className="archive-title" id="archive-h2">
          GitHub Archives
        </h2>
        <p className="archive-subtitle">Browse The Archives</p>
      </div>
      <div className="archive-list">
        {archiveData
          .slice(0, showMore ? archiveData.length : 3)
          .map((archive, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}>
              <ArchiveCard
                title={archive.title}
                des={archive.description}
                listItem={archive.listItems}
                link={archive.link}
              />
            </motion.div>
          ))}
      </div>
      <div className="archive-show-more">
        <button
          onClick={() => setShowMore((prevState) => !prevState)}
          className="archive-show-more-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archives;

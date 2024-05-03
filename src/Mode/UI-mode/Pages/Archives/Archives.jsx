import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArchiveCard } from "../../components/components";
import { archiveData } from "../../constants";
import "./Archives.css";
const Archives = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="archive-container" id="archives">
      <div className="archive-header">
        <h2
          className="archive-title"
          id="archive-h2"
          style={{ color: "#d0d0d0" }}>
          GitHub Archives
        </h2>
        {/* <p className="archive-subtitle">Browse The Archives</p> */}
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

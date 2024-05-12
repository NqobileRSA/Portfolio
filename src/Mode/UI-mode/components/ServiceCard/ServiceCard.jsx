import React, { useRef, useEffect } from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, iconsrc, characters }) => {
  const cardRef = useRef(null);
  const charactersRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      charactersRef.current.style.setProperty("--x", `${x}px`);
      charactersRef.current.style.setProperty("--y", `${y}px`);
    };

    const fillCharacters = () => {
      const containerWidth = charactersRef.current.offsetWidth;
      const containerHeight = charactersRef.current.offsetHeight;
      const fontSize = parseFloat(
        getComputedStyle(charactersRef.current).fontSize
      );
      const characterWidth = fontSize * 0.6; // Approximate character width
      const charactersPerRow = Math.ceil(containerWidth / characterWidth);
      const rowCount = Math.ceil(containerHeight / fontSize);
      let charactersString = "";

      for (let i = 0; i < rowCount; i++) {
        const row = characters.repeat(charactersPerRow);
        charactersString += `${row}\n`;
      }

      charactersRef.current.textContent = charactersString;
    };

    cardRef.current.addEventListener("mousemove", handleMouseMove);
    cardRef.current.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("resize", fillCharacters);
    fillCharacters();

    return () => {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
      cardRef.current.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("resize", fillCharacters);
    };
  }, [characters]);

  return (
    <div className="single-card-wrapper">
      <a href="#services">
        <div className="card-hover-container" ref={cardRef}>
          <i className={iconsrc} alt="">
            {title}
          </i>
          {/* <div className="card-gradient"></div> */}
          <div className="card-bg-characters" ref={charactersRef}></div>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;

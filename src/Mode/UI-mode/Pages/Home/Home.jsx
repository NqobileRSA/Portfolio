import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import {
  Left,
  ParallexBG,
  Right,
  SkillSphere,
} from "../../components/components";

const Home = () => {
  return (
    <section id="home " className="banner conatiner">
      <Left />
      <Right />
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="heading-3">
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="heading-1">
        Nqobile Ngobeni.
        <span className="subheading">Full-Stack Developer.</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="paragraph">
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.
      </motion.p>
      <div className="actions">
        <a href="#projects">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="button btn-1 heading-3">
            Explore My Work
          </motion.button>
        </a>
        <a href="#contact">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="button btn-2">
            Contact me
          </motion.button>
        </a>
      </div>
      <SkillSphere />
      <ParallexBG />
    </section>
  );
};

export default Home;

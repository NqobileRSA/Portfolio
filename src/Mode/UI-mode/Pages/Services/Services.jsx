import React from "react";
import { ServiceCard } from "../../components/components";
import "./Service.css";
import { services } from "../../constants";

const Services = () => {
  return (
    <section id="services" className="service container">
      {services.map((item) => (
        <ServiceCard
          key={item.title}
          iconsrc={item.icon}
          characters={item.str}
          title={item.title}
        />
      ))}
    </section>
  );
};

export default Services;

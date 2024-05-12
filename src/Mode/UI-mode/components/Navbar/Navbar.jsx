import React, { useState } from "react";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeTab, setActiveTab] = useState("#");

  const navLinks = [
    { path: "#", label: "Home" },
    { path: "#projects", label: "Projects" },
    { path: "#archives", label: "Archives" },
    { path: "#contact", label: "Contact" },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      id="header"
      className="header d-flex align-items-center container-fluid  ">
      <div className="container-fluid px-2  d-flex align-items-center justify-content-between mt-2 mb-2">
        <a href="#" className="logo d-flex align-items-center">
          <h1>Nqobile.</h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            {navLinks.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.path}
                  onClick={() => handleTabClick(nav.path)}
                  className={
                    nav.path === activeTab
                      ? "active navmenuItem"
                      : "navmenuItem"
                  }>
                  <span>{nav.label}</span>
                </a>
              </li>
            ))}
            <li>
              <Button
                className="get-a-quote navbar-toggler"
                variant="link"
                onClick={handleShow}>
                Resume
              </Button>
            </li>
          </ul>
        </nav>
        <span className="navbar-toggler" onClick={toggle}>
          <i className="bi bi-list" />
        </span>

        <Drawer
          opened={opened}
          onClose={toggle}
          position="right"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          className="drawer">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="quoteWrap">
              <Button
                className="get-a-quote"
                variant="link"
                onClick={handleShow}>
                Resume
              </Button>
            </li>
          </ul>
        </Drawer>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://profile.indeed.com/p/nqobilen-zjh10bd"
              width="100%"
              height="500px"
              frameBorder="0"></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;

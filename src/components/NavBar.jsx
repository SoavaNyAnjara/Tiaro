import React, { useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ScrollToTop from './ScrollToTop';
import Home from './Home';

const NavBar = () => {
  const home = useRef(null);
  const about = useRef(null);
  const activity = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <ScrollToTop />
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand ref={home}>
            <img onClick={() => scrollToSection(home)}
              alt="tiaro"
              src="../LOGO-Tiaro.png"
              width="50"
              height="50"
              className="d-inline-block align-top logo"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle
            className="justify-content-end"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection(home)}>
                  Accueil
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection(about)}>
                  A propos de nous
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection(activity)}>
                  Nos activités
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection(contact)}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home reference={home} />

      <section ref={about} className="about">
        <h3>Qui sommes nous</h3>
      </section>
      <section ref={activity} className="activity">
        <h3>Activités</h3>
      </section>
      <section ref={contact} className="contact">
        <h3>Nous contactez</h3>
      </section>
    </>
  );
};

export default NavBar;

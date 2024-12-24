import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    const handleNavigation = (section) => {
        const element = document.getElementById(section);
        if (element) {
          const yOffset = -90; // Juster denne værdi afhængigt af højden på din navigation bar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    return (
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#" onClick={() => handleNavigation('')}>RUTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigation('home')}>Hjem</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('aboutMe')}>Om mig</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('mySkills')}>Færdigheder</Nav.Link>
            <NavDropdown title="Projekter" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleNavigation("RAT")}>Undersøgelse af Remote Access Trojans</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation("TimeME")}>Udarbejdelse af tidsregistreringssystem</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation("safeliiProject")}>Compose / Kotlin / Google maps / Rutevejledning </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation("homeProject")}>React / TypeScript / Denne side</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavigationBar;

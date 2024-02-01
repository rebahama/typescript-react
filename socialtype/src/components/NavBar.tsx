import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [hello, setHello] = useState<string | null>('testing');

  const NotLogg: React.FC = () => {
    const content: string = 'this is true';
    setHello(content); // Using the state updater function
    return <div>{content}</div>;
  };

  return (
    <header>
      <div className="top-banner">
        <p> The buddy saler</p>
        <Logo colors="#a25757" />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink to="typescript-react/">
  Home
</NavLink>
<NavLink to="typescript-react/showall">
  Show All
</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {hello === 'testing' ? hello : 'nothing here'}{' '}
              {/* Fixed conditional rendering */}
              <Button onClick={NotLogg}>click here</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const img1 =
    "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255,255,255,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\")";
  const img2 =
    "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255,255,255,0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\")";
  const changeOpacity = () => {
    const toggleIcon = document.getElementsByClassName('navbar-toggler')[0];
    if (!toggleIcon.classList.contains('collapsed'))
      toggleIcon.firstChild.style.backgroundImage = img1;
    else toggleIcon.firstChild.style.backgroundImage = img2;
  };
  return (
    <Navbar bg="transparent" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <DiCssdeck size={'3rem'} style={{ marginBottom: '0.75rem' }} />
          <Span>Portfolio</Span>
        </Navbar.Brand>
        <div className="d-flex d-md-none">
          <SocialIcons href="https://github.com/IbrahimMourad">
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ibrahimmourad97/">
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={changeOpacity}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#tech">Technologies</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link
              href="https://github.com/IbrahimMourad"
              className="px-0 d-none d-md-block"
            >
              <SocialIcons>
                <AiFillGithub size={'3rem'} />
              </SocialIcons>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/IbrahimMourad"
              className="px-0 d-none d-md-block"
            >
              <SocialIcons>
                <AiFillLinkedin size={'3rem'} />
              </SocialIcons>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-md-flex"></div>
      </Container>
    </Navbar>
  );
};

export default Header;

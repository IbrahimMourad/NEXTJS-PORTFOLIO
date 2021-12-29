import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Span, SocialIcons } from './HeaderStyles';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <DiCssdeck size={'3rem'} />
          <Span>Portfolio</Span>
        </Navbar.Brand>
        <div className="d-flex d-md-none">
          <Link
            href="https://github.com/IbrahimMourad"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcons>
              <AiFillGithub size={'3rem'} />
            </SocialIcons>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ibrahimmourad97/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcons>
              <AiFillLinkedin size={'3rem'} />
            </SocialIcons>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={changeOpacity}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Link href="#projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="#tech" passHref>
              <Nav.Link>Technologies</Nav.Link>
            </Link>
            <Link href="#about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="https://github.com/IbrahimMourad" passHref>
              <Nav.Link
                className="px-0 d-none d-md-block"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons>
                  <AiFillGithub size={'3rem'} />
                </SocialIcons>
              </Nav.Link>
            </Link>
            <Link href="https://www.linkedin.com/in/ibrahimmourad97/" passHref>
              <Nav.Link
                className="px-0 d-none d-md-block"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons>
                  <AiFillLinkedin size={'3rem'} />
                </SocialIcons>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

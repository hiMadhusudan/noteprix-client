import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledFooter, FooterLogo, FooterLink, FooterContainer, SocialMediaIcons, Address, CopyRight } from './Footer.styles';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Col md={3} sm={9}>
          <FooterLogo>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Noteprix" />
        </Link>
            <p>Secure and reliable, private information sharing platform, with complete access control over shared information.</p>
          </FooterLogo>
        </Col>
        <Col md={3} sm={9}>
          <h5>Navigation</h5>
          <Nav className="flex-column">
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/disclaimer">Disclaimers</FooterLink>
          </Nav>
        </Col>
        <Col md={3} sm={9}>
          <h5>Contact</h5>
          <Address>
            <p>Address: Lucky Pg, Hardaspur, Punjab, 144411</p>
            Email: <a href='mailto:info@noteprix.live'  style={{ color: 'white', textDecoration: 'underline' }}>info@noteprix.live</a>
          </Address>
          Follow us on:
          <SocialMediaIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </SocialMediaIcons>
        </Col>
      </FooterContainer>
      <CopyRight>
        © {new Date().getFullYear()} Noteprix. All rights reserved.
      </CopyRight>
    </StyledFooter>
  );
};

export default Footer;

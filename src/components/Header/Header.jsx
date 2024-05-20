import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.svg';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  padding: 0 20px;
`;

const StyledBrand = styled(Navbar.Brand)`
  margin-right: 80px;
  img {
    height: 70px;
    @media (max-width: 576px) {
      height: 50px;
    }
  }
`;

const StyledNav = styled(Nav)`
  .nav-link {
    margin-right: 20px;
    color: #003366;
    font-size: 18px;
    font-weight: 500;
    &:hover, &:focus {
      color: #008080;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const StyledForm = styled(Form)`
  position: relative;
  .form-control {
    flex-grow: 1;
    border-radius: 20px;
    padding-left: 35px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px;
    &:focus {
      box-shadow: 0 0 8px #008080;
    }
  }
`;

const RightAlignedNav = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 30px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    .form-inline {
      width: 100%;
      justify-content: center;
    }
    & > * {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    alert(`Search for: ${searchQuery}`); // Placeholder for actual search logic
  };

  return (
    <StyledNavbar expand="lg" variant="light">
      <StyledBrand>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Noteprix" />
        </Link>
      </StyledBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="mr-auto">
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/privacy" className="nav-link">Privacy Policy</Link>
          <Link to="/disclaimer" className="nav-link">Disclaimers</Link>
        </StyledNav>
        <RightAlignedNav>
          <StyledForm inline onSubmit={handleSearch}>
            <FormControl type="text" placeholder="Search user or message" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <Button type="submit" style={{ display: 'none' }}>Search</Button>  {/* Invisible button to trigger form submission */}
          </StyledForm>
          <StyledNav>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </StyledNav>
        </RightAlignedNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;

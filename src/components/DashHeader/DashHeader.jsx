import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  padding: 0 20px;
`;

const StyledBrand = styled(Navbar.Brand)`
  margin-right: 80px;
  img {
    height: 70px;
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
  }
`;

const StyledForm = styled(Form)`
  position: relative;
  .form-control {
    border-radius: 20px;
    padding-left: 35px;
    &:focus {
      box-shadow: 0 0 8px #008080;
    }
  }
`;

const LogoutButton = styled(Button)`
  background-color: #008080;
  border: none;
  &:hover {
    background-color: #006666;
  }
`;

const DashHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Search for: ${searchQuery}`);
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
          <Link to="/chat" className="nav-link">Chat</Link>
          <Link to="/share-file" className="nav-link">Share File</Link> {/* New Link for sharing files */}
          <Link to="/shared-files" className="nav-link">Shared Files</Link> {/* New Link for viewing shared files */}
          <Link to="/profile" className="nav-link">Profile</Link>
        </StyledNav>
        <StyledForm inline onSubmit={handleSearch}>
          <FormControl type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <Button type="submit" style={{ display: 'none' }}>Search</Button>
        </StyledForm>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default DashHeader;

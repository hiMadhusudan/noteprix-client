import styled from 'styled-components';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: var(--primary-color); // Deep Blue
`;

export const StyledNav = styled(Nav)`
  .nav-link {
    color: var(--white) !important; // Override default styles
    &:hover {
      color: var(--accent-color) !important; // Teal for hover
    }
  }
`;

export const StyledForm = styled(Form)`
  .form-control {
    margin-right: 0.5rem;
    color: var(--secondary-color); // Slate Gray
    &::placeholder {
      color: var(--light-gray);
    }
  }
`;

export const StyledButton = styled(Button)`
  color: var(--white);
  background-color: var(--accent-color); // Teal
  border-color: var(--accent-color); // Teal

  &:hover {
    background-color: var(--primary-color); // Deep Blue
    border-color: var(--primary-color);
  }
`;

export const StyledFormControl = styled(FormControl)`
  background-color: transparent;
  border-color: var(--light-gray);
  color: var(--white);

  &::placeholder {
    color: var(--light-gray);
  }
`;


import styled from 'styled-components';
import { Container, Nav } from 'react-bootstrap';

export const StyledFooter = styled.footer`
  background-color: #003366;  // Deep Blue
  color: white;
  padding: 40px 20px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 20px 10px;
    font-size: 14px;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 20px;
  img {
    height: 50px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    color: #ccc;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const FooterLink = styled(Nav.Link)`
  color: white;
  &:hover {
    color: #008080;  // Teal for hover effects
  }
  margin-bottom: 10px;  // Added spacing between links
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > div {
      margin-bottom: 20px; // Adds consistent spacing between sections
    }
  }
`;

export const SocialMediaIcons = styled.div`
  font-size: 24px;
  a {
    color: white;
    margin-right: 15px;
    &:hover {
      color: #008080;
    }
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Address = styled.div`
  font-size: 14px;
  color: #ccc;
  margin: 20px 0;
  @media (max-width: 768px) {
    order: 3;  // Rearranges the order if needed
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
`;

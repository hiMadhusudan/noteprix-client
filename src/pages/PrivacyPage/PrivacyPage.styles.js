import styled from 'styled-components';

export const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export const Hero = styled.div`
  background-color: #003366; // Deep Blue
  color: white;
  padding: 50px 20px;
  text-align: center;
  h1 {
    margin: 0;
  }
`;

export const Section = styled.section`
  margin-top: 40px;
  &:first-child {
    margin-top: 20px;
  }
  h2 {
    color: #003366; // Dark blue
    margin-bottom: 10px;
  }
`;

export const SubSection = styled.div`
  margin-top: 20px;
  h3 {
    color: #005577; // Lighter blue
  }
  p {
    margin-top: 5px;
  }
`;

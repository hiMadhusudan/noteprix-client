import styled from 'styled-components';

export const ClientLogosContainer = styled.div`
  padding: 40px 20px; // Increase padding for better visual separation
  margin-top: 20px;
  background-color: #fff; // Ensures that the background doesn't distract from the logos

  .clients-heading {
    text-align: center;
    margin-bottom: 30px; // More space above the carousel
    font-size: 24px;
    color: #003366;
  }

  .slick-slide {
    padding: 0 10px; // Adds padding around each slide for more space between logos
  }

  .slick-list {
    margin: 0 20px; // Additional margin for the sliding area
  }
`;

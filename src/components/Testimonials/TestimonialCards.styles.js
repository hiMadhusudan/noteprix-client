import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const TestimonialSection = styled.div`
  background-color: #FFFFFF;  // White background for the section
  padding: 40px 0;  // Add padding for spacing around the section
`;

export const SectionHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #003366;  // Deep blue text color as per the brand style
  margin-bottom: 30px; // Space below the heading
`;

export const TestimonialCard = styled(Card)`
  background-color: #f8f9fa;  // Light grey for cards, you can change it to any brand-specific color
  color: #003366;  // Deep blue text color as per the brand style
  margin: 20px auto;  // Center the cards horizontally
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: start; // Align items to the start to focus more on text
  max-width: 600px;  // Set a max width for better readability on large screens

  .card-img {
    width: 60px;  // Smaller profile picture size
    height: 60px;
    border-radius: 50%;  // Ensure the image is perfectly circular
    margin-right: 20px;
    object-fit: cover;  // Ensure images are not distorted
  }

  .card-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;  // Allow the text to take up remaining space
  }

  .card-title {
    font-size: 18px;  // Slightly smaller to not overpower the text
    font-weight: bold;
    text-align: center;
  }

  .card-text {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-top: 10px;  // Add a little space between title and text
  }
`;

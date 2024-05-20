import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #003366; // Deep blue
  margin-bottom: 40px;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: start;
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .card-header {
    background-size: cover;
    background-position: center;
    height: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-blend-mode: multiply;
    color: white;
    padding: 10px;
    background-color: rgba(0,0,0,0.5); // Dark overlay for better readability
  }

  .card-content {
    padding: 20px;
    h3 {
      color: #003366; // Deep blue
      margin: 10px 0; // Space between title and description
    }
    p {
      color: #666;
      font-size: 14px; // Smaller text for description
    }
  }
`;

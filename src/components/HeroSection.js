import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import video from '../assets/background.mp4';

// Styled components
const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%); /* Adding a gradient overlay */
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem; /* Responsive font size for larger screens could be handled here */
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={ video } type="video/mp4" />
      </VideoBackground>
      <StyledContainer>
        <Title>Welcome to Noteprix</Title>
        <Subtitle>Your secure messaging solution</Subtitle>
      </StyledContainer>
    </HeroWrapper>
  );
};

export default HeroSection;

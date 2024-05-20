import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AboutContainer, Hero, Story, Team, Values } from './AboutPage.styles';

const AboutPage = () => {
  return (
    <>
      <Header />
      <Hero>
        <h1>About Noteprix</h1>
        <p>Your secure messaging solution.</p>
      </Hero>
      <AboutContainer>
        <Story>
          <h2>Our Story</h2>
          <p>Founded in 2024, Noteprix was created to ensure secure and reliable communication between peers. Our mission is to protect your data and provide innovative communication solutions.</p>
        </Story>
        <Team>
          <h2>Meet the Team</h2>
          <p>Our dedicated team combines software developers and customer support.</p>
          {/* Add team members photos and descriptions here if available */}
        </Team>
        <Values>
          <h2>Our Values</h2>
          <p>At Noteprix, we value security, innovation, and transparency. We strive to uphold these values in every aspect of our operation.</p>
        </Values>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default AboutPage;

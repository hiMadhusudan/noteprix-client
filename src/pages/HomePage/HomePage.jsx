import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import ClientsSection from '../../components/ClientsSection/ClientsSection';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <ClientsSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;

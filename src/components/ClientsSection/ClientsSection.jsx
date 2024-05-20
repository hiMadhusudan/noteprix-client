import React from 'react';
import Slider from 'react-slick';
import { ClientLogosContainer } from './ClientsSection.styles';
import safeshare from '../../assets/safeshare.png';
import fitnessgym from '../../assets/fitness-gym.png';
import sender from '../../assets/sender.png';
import tokopedia from '../../assets/tokopedia.png';
import mysecret from '../../assets/mysecret.png';
import notes4exam from '../../assets/notes4exam.png';

const clients = [
  safeshare,
  fitnessgym,
  sender,
  tokopedia,
  mysecret,
  notes4exam
];

const ClientsSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Centers items
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <ClientLogosContainer>
      <h2 className="clients-heading">Our Clients</h2>
      <Slider {...settings}>
        {clients.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Client ${index + 1}`} style={{ width: 'auto', height: '40px', margin: '0 auto' }} />
          </div>
        ))}
      </Slider>
    </ClientLogosContainer>
  );
};

export default ClientsSection;

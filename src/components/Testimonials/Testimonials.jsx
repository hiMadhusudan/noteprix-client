import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { TestimonialSection, SectionHeading, TestimonialCard } from './TestimonialCards.styles';
import ajay from '../../assets/ajay.png';
import saroj from '../../assets/saroj.png';
import kundan from '../../assets/kundan.png';

const testimonials = [
  { id: 1, name: "Ajay Kumar", text: "This service is outstanding. I've never felt more secure!", image: ajay },
  { id: 2, name: "Saroj Singh", text: "Highly recommended for anyone wanting secure and reliable communication.", image: saroj },
  { id: 3, name: "Kundan Singh", text: "Absolutely the best features for me - access control, biometric authentication.", image: kundan },
];

const Testimonials = () => {
  return (
    <TestimonialSection>
      <Container>
        <SectionHeading>Testimonials</SectionHeading>
        <Row>
          {testimonials.map(testimonial => (
            <Col md={4} key={testimonial.id}>
              <TestimonialCard>
                <Card.Img variant="top" src={testimonial.image} className="card-img" />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Text>{testimonial.text}</Card.Text>
                </Card.Body>
              </TestimonialCard>
            </Col>
          ))}
        </Row>
      </Container>
    </TestimonialSection>
  );
};

export default Testimonials;

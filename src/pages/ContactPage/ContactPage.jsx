import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  ContactContainer,
  Title,
  StyledForm,
  FormLabel,
  FormInput,
  FormTextArea,
  SubmitButton,
  Message
} from './ContactPage.styles';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [messageStatus, setMessageStatus] = useState({
    text: '',
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_hpw913l', 'template_zvq3aie', formData, '-VPW3G6LhugA0nc4V')
      .then((result) => {
        setMessageStatus({ text: 'Your message has been sent successfully!', success: true });
        setFormData({ user_name: '', user_email: '', message: '' }); // Reset form after sending
      }, (error) => {
        setMessageStatus({ text: 'Failed to send the message, please try again later.', success: false });
      });
  };

  return (
    <>
      <Header />
      <ContactContainer>
        <Container>
          <Title>Contact Us</Title>
          <StyledForm onSubmit={sendEmail}>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
            <FormLabel>Email address</FormLabel>
            <FormInput type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
            <FormLabel>Message</FormLabel>
            <FormTextArea name="message" value={formData.message} onChange={handleChange} required />
            <SubmitButton type="submit">Send Message</SubmitButton>
            {messageStatus.text && (
              <Message success={messageStatus.success}>{messageStatus.text}</Message>
            )}
          </StyledForm>
        </Container>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default ContactPage;

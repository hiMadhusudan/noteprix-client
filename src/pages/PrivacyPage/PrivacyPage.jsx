import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { PrivacyContainer, Section, Hero } from './PrivacyPage.styles';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <Hero>
        <h1>Privacy Policy</h1>
      </Hero>
      <PrivacyContainer>
        <Section>
          <h2>Introduction</h2>
          <p>
            Welcome to Noteprix. Your privacy is critical to us. This Privacy Policy explains the information we collect, how we use it, and your rights as a user of our services. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </Section>
        <Section>
          <h2>Information Collection and Use</h2>
          <p>
            We collect various types of information for various purposes to provide and improve our service to you.
          </p>
          <ul>
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to, your email address, name, phone number, postal address, and other data.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This Usage Data may include details such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
          </ul>
        </Section>
        <Section>
          <h2>Cookies and Tracking Data</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.
          </p>
        </Section>
        <Section>
          <h2>Use of Data</h2>
          <p>
            Noteprix uses the collected data for various purposes including to provide and maintain our Service, to notify you about changes to our service, to allow you to participate in interactive features of our Service when you choose to do so, and to provide customer support.
          </p>
        </Section>
        <Section>
          <h2>Legal Basis for Processing Personal Data under the Information Technology Act, 2000</h2>
          <p>
            If you are from India, Noteprix's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
          </p>
        </Section>
        <Section>
          <h2>Retention of Data</h2>
          <p>
            Noteprix will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
        </Section>
        <Section>
          <h2>Your Data Protection Rights under the Information Technology Act, 2000</h2>
          <p>
            Under this law, Indian users are entitled to the following:
          </p>
          <ul>
            <li><strong>The right to access, update or delete the information we have on you.</strong> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section.</li>
            <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
            <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
            <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
            <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable, and commonly used format.</li>
            <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Noteprix relied on your consent to process your personal information.</li>
          </ul>
        </Section>
        <Section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective when they are posted on this page.
          </p>
        </Section>
      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default PrivacyPage;

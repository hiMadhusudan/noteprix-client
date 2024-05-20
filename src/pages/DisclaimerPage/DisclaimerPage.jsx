import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { DisclaimerContainer, Section, Hero } from './DisclaimerPage.styles';

const DisclaimerPage = () => {
  return (
    <>
      <Header />
      <Hero>
        <h1>Disclaimer for Noteprix</h1>
      </Hero>
      <DisclaimerContainer>
        <Section>
          <h2>General Information</h2>
          <p>All information on this website – <strong>www.noteprix.live</strong> – is published in good faith and for general information purposes only. Noteprix does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Noteprix), is strictly at your own risk. Noteprix will not be liable for any losses and/or damages in connection with the use of our website.</p>
        </Section>
        <Section>
          <h2>External Links Disclaimer</h2>
          <p>The Noteprix website may contain links to external websites that are not provided or maintained by or in any way affiliated with Noteprix. Please note that Noteprix does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        </Section>
        <Section>
          <h2>Professional Disclaimer</h2>
          <p>The information provided by Noteprix is for general guidance on matters of interest only. Even if Noteprix takes every precaution to ensure that the content of this website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on this site. Noteprix is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
        </Section>
        <Section>
          <h2>Limitation of Liabilities</h2>
          <p>Noteprix, its directors, employees, partners, agents, suppliers, or affiliates, will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
        </Section>
        <Section>
          <h2>Copyright and Trademarks</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Noteprix website are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the site, except as allowed by copyright law, is strictly prohibited. You do not acquire ownership rights to any content, document, or other materials viewed through the site.</p>
        </Section>
      </DisclaimerContainer>
      <Footer />
    </>
  );
};

export default DisclaimerPage;

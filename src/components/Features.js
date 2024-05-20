import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Features = () => {
  return (
    <CardGroup style={{ margin: '20px' }}>
      <Card>
        <Card.Body>
          <Card.Title>Secure Messaging</Card.Title>
          <Card.Text>
            All messages are encrypted to ensure your communication is private.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Biometric Login</Card.Title>
          <Card.Text>
            Use biometrics to log in securely and conveniently.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Easy Sharing</Card.Title>
          <Card.Text>
            Share files and messages with ease within a secure environment.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Features;

import React, { useState } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import styled from 'styled-components';

// Styled Components for the entire page container
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; // Full viewport height to center vertically
  background: #f4f4f4; // Light background for the whole page
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px; // Maximum width for the form
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: #008080; // Focus color
    box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.25); // Adds a subtle glow
  }
`;

const Button = styled.button`
  background-color: #008080; // Primary color
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; // Slightly larger font size for readability

  &:hover {
    background-color: #006666; // Darker shade for hover effect
  }
`;

const ShareFilePage = () => {
  const [file, setFile] = useState(null);
  const [expires, setExpires] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('expiresAt', expires);

    try {
      const response = await fetch('http://localhost:5000/api/files/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };

  return (
    <div>
      <DashHeader />
      <PageContainer>
        <Container>
          <h2>Share a File</h2>
          <Form onSubmit={handleSubmit}>
            <Input type="file" onChange={e => setFile(e.target.files[0])} />
            <Input type="datetime-local" value={expires} onChange={e => setExpires(e.target.value)} />
            <Button type="submit">Upload File</Button>
          </Form>
        </Container>
      </PageContainer>
    </div>
  );
};

export default ShareFilePage;

import React, { useState, useEffect } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #008080;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #006666;
  }
`;

const SharedFilesPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/files/shared');
        const data = await response.json();
        if (response.ok) {
          setFiles(data.files);
        } else {
          throw new Error('Failed to fetch files');
        }
      } catch (error) {
        console.error('Error fetching files:', error);
        alert('Failed to load shared files.');
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (fileId) => {
    // Implement file download logic here
    console.log('Downloading file:', fileId);
    // Typically you might set window.location.href to a URL to download the file
  };

  return (
    <div>
      <DashHeader />
      <Container>
        <h2>Shared Files</h2>
        <List>
          {files.map(file => (
            <ListItem key={file._id}>
              <span>{file.name}</span>
              <Button onClick={() => handleDownload(file._id)}>Download</Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default SharedFilesPage;

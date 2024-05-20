import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader'; // Adjust the import path as necessary
import styled from 'styled-components';

// Styled Components for the main content area
const MainContent = styled.div`
  padding: 20px;
  margin-top: 20px; // Give some space below the header
  text-align: center;
`;

const DashboardPage = () => {
  return (
    <div>
      <DashHeader />
      <MainContent>
        <h1>Welcome to Your Dashboard</h1>
        <p>This is your main area where you can manage your profile, chats.</p>
        {/* Additional content components go here */}
      </MainContent>
    </div>
  );
};

export default DashboardPage;

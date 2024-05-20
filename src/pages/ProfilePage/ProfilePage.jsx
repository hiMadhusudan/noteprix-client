import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DashHeader from '../../components/DashHeader/DashHeader'; // Ensure the correct path is provided

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); // Adjust based on the height of your DashHeader
  background: #f4f4f4; // Background color of the entire page (optional)
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  background: #fff; // Background of the form container
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: #003366; // Deep blue, consistent with your branding
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #003366;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #008080; // Teal, consistent with your branding
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #006666; // Darker teal for hover effect
  }
`;

const Message = styled.p`
  color: ${props => props.error ? 'red' : 'green'};
  font-size: 14px;
`;

const ProfilePage = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const userInfo = localStorage.getItem('userInfo');
            const userId = JSON.parse(userInfo)._id;
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}`);
                const data = await response.json();
                if (response.ok) {
                    setUser({ username: data.username, email: data.email });
                } else {
                    setMessage('Failed to fetch data');
                }
            } catch (error) {
                setMessage('Error fetching data');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = localStorage.getItem('userInfo');
        const userId = JSON.parse(userInfo)._id;
        const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Profile updated successfully');
        } else {
            setMessage(data.message || 'Failed to update profile');
        }
    };

    const handleDelete = async () => {
        const userInfo = localStorage.getItem('userInfo');
        const userId = JSON.parse(userInfo)._id;
        if (window.confirm('Are you sure you want to delete your profile? This cannot be undone.')) {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Profile deleted successfully');
                localStorage.removeItem('userInfo'); // Clear user info from storage
                navigate('/login'); // Redirect to login page
            } else {
                setMessage(data.message || 'Failed to delete profile');
            }
        }
    };

    return (
        <div>
            <DashHeader />
            <PageWrapper>
                <Container>
                    <Title>Profile Page</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label>Username:</Label>
                        <Input type="text" name="username" value={user.username} onChange={handleInputChange} />
                        
                        <Label>Email:</Label>
                        <Input type="email" name="email" value={user.email} onChange={handleInputChange} />
                        
                        <Label>New Password (leave blank to keep the same):</Label>
                        <Input type="password" name="password" value={user.password} onChange={handleInputChange} />
                        
                        <Button type="submit">Update Profile</Button>
                        <Button type="button" onClick={handleDelete} style={{ backgroundColor: '#c00', marginTop: '10px' }}>Delete Profile</Button>
                    </Form>
                    <Message error={message.startsWith('Failed')}>{message}</Message>
                </Container>
            </PageWrapper>
        </div>
    );
};

export default ProfilePage;

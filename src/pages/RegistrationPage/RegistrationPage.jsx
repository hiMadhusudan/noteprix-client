import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import secureBackground from '../../assets/secure.png';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');

        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (!response.ok) {
            setMessage(data.message || 'An error occurred');
        } else {
            setMessage('Registration successful!');
            console.log(data);
            // Optionally redirect to login or another page after successful registration
        }
    };

    const handleHomeClick = () => {
        navigate('/');  // Assuming you are using react-router-dom for routing
    };

    const styles = {
        page: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: `url(${secureBackground})`, // Use the imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0',
            overflow: 'hidden',
        },
        overlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
            backdropFilter: 'blur(8px)', // Increase blur for a more pronounced effect
            zIndex: '1',
        },
        container: {
            position: 'relative',
            zIndex: '2',
            color: '#003366', // Deep blue
            fontFamily: 'Roboto, sans-serif',
            maxWidth: '400px',
            width: '100%',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
            boxSizing: 'border-box',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #708090', // Slate gray
            boxSizing: 'border-box',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#008080', // Teal
            color: '#FFFFFF', // White
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px', // Add margin for spacing between buttons
            width: 'calc(50% - 20px)', // Ensure buttons take up half the container width with some margin
            boxSizing: 'border-box',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        message: {
            color: 'green',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={styles.button} type="submit">Register</button>
                        <button style={styles.button} onClick={handleHomeClick} type="button">Home</button>
                    </div>
                    {message && <div style={styles.message}>{message}</div>}
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;

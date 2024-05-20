import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import secureBackground from '../../assets/secure.png';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook to handle navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (!response.ok) {
            setMessage(data.message || 'An error occurred during login.');
        } else {
            setMessage('Login successful!');
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/dashboard'); // Navigate to the Dashboard page
        }
    };

    const handleHomeClick = () => {
        navigate('/');  // Navigate to the home page
    };

    const styles = {
        page: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: `url(${secureBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)',  // Increase the blur effect
        },
        overlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)', // Further blur to focus on the form
            zIndex: '1',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            width: '100%',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            textAlign: 'center',
            zIndex: 2,
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #708090',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#008080',
            color: '#FFFFFF',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
        },
        message: {
            color: 'red',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                        <button style={styles.button} type="submit">Login</button>
                        <button style={styles.button} onClick={handleHomeClick} type="button">Home</button>
                    </div>
                    {message && <div style={styles.message}>{message}</div>}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

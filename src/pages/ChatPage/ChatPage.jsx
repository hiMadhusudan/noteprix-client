import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashHeader from '../../components/DashHeader/DashHeader'; 

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  height: calc(100vh - 60px); // Account for header height
  overflow: auto;
`;

const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  overflow-y: auto;
  padding: 15px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

const MessageItem = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  border: 1px solid #ccc;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #006666;
  }
`;

// ChatPage Component
const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [receiverId, ] = useState(""); // You will need to manage the receiver ID based on your application logic

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/messages/receive/${receiverId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include authorization header if your API requires
          },
        });
        const data = await response.json();
        if (response.ok) {
          setMessages(data);
        } else {
          throw new Error(data.message || "Failed to fetch messages");
        }
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    loadMessages();
  }, [receiverId]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if required
        },
        body: JSON.stringify({
          receiver: receiverId,
          content: newMessage,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Example: Expires in 24 hours
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessages([...messages, data]); // Optionally update the chat view immediately
        setNewMessage(""); // Clear input after sending
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <DashHeader />
      <Container>
        <ChatContainer>
          <MessageList>
            {messages.map((msg) => (
              <MessageItem key={msg._id} isSender={msg.sender === localStorage.getItem('userId')}>
                {msg.content}
              </MessageItem>
            ))}
          </MessageList>
          <Form onSubmit={handleSendMessage}>
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </Form>
        </ChatContainer>
      </Container>
    </div>
  );
};

export default ChatPage;

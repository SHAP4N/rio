import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        text: newMessage
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error creating message:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Message App</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Enter a new message"
            className="message-input"
          />
          <button type="submit" className="submit-button">Send</button>
        </form>
        <div className="messages-container">
          {messages.map((message) => (
            <div key={message.id} className="message">
              {message.text}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App; 
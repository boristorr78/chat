import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Establecer la conexión WebSocket al cargar el componente
  useEffect(() => {
    // Asegúrate de que la URL coincida con la de tu servidor WebSocket
    const socketConnection = new WebSocket('ws://localhost:5000'); 

    socketConnection.onopen = () => {
      console.log('Conexión WebSocket establecida');
    };

    socketConnection.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    socketConnection.onclose = () => {
      console.log('Conexión WebSocket cerrada');
    };

    socketConnection.onerror = (error) => {
      console.error('Error en WebSocket:', error);
    };

    // Guardar la conexión en el estado
    setSocket(socketConnection);

    // Limpiar la conexión al desmontar el componente
    return () => {
      if (socketConnection) {
        socketConnection.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      const messageData = {
        user: 'Usuario',
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      };

      socket.send(JSON.stringify(messageData));
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span>{msg.user}: </span>
            <span>{msg.text}</span>
            <span>{msg.timestamp}</span>
          </div>
        ))}
      </div>

      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Escribe un mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;

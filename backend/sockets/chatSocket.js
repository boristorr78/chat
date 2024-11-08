const WebSocket = require('ws');

function configurarWebSocket(server) {
    // Crear el servidor WebSocket utilizando el servidor HTTP
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');

        // Manejar mensajes recibidos del cliente
        socket.on('message', (data) => {
            console.log('Mensaje recibido:', data);

            // Aquí puedes agregar la lógica para enviar los mensajes a los usuarios o notificaciones
            // Ejemplo: Enviar el mensaje recibido a todos los clientes conectados
            wss.clients.forEach(client => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        // Manejar desconexiones de clientes
        socket.on('close', () => {
            console.log('Cliente desconectado');
        });
    });
}

module.exports = configurarWebSocket;

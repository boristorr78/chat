// Requerir las dependencias necesarias
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');  // Requerir las rutas de autenticación

// Middleware
app.use(cors());  // Habilitar CORS para que las peticiones desde otros dominios sean permitidas
app.use(bodyParser.json());  // Para procesar los cuerpos de las peticiones como JSON

// Usar las rutas de autenticación
// Esto hará que todas las rutas de authRoutes se accedan desde la URL /api/auth
app.use('/api/auth', authRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;  // Si hay una variable de entorno PORT, úsala, si no, usa el puerto 5000

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


const express = require('express');
//const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const authRoutes = require('./routes/authRoutes');  // Ruta de autenticación
const configurarWebSocket = require('./sockets/chatSocket');  // Importar WebSocket

// Crear servidor HTTP utilizando Express
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Para procesar cuerpos JSON

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

// Configurar WebSocket
configurarWebSocket(server);

// Iniciar el servidor
//const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

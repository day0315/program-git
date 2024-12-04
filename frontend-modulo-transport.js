const socket = io();

// Asignar rol de transportador
socket.emit('setRole', 'transportador');

// Unirse a la sala de transportadores
socket.emit('joinTransportadorRoom');

// Escuchar mensajes del administrador
socket.on('messageFromAdmin', (message) => {
    console.log(`Mensaje de la empresa: ${message}`);
    // Mostrar mensaje en la interfaz
});

// Enviar respuesta al administrador
const sendResponseToAdmin = (message) => {
    socket.emit('transportadorMessage', message);
};

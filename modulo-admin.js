const socket = io();

// Asignar rol de administrador
socket.emit('setRole', 'admin');

// Enviar mensaje a un transportador específico
const sendMessageToTransportador = (transportadorId, message) => {
    socket.emit('adminMessage', { transportadorId, message });
};

// Enviar mensaje a todos los transportadores
const broadcastToTransportadores = (message) => {
    socket.emit('broadcastToTransportadores', message);
};

// Escuchar respuestas de transportadores
socket.on('messageFromTransportador', (data) => {
    console.log(`Respuesta del transportador (${data.transportadorId}): ${data.message}`);
});

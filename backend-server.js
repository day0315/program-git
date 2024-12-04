const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    // Identificar roles: admin o transportador
    socket.on('setRole', (role) => {
        socket.role = role; // Guardar el rol en el socket
        console.log(`Rol asignado: ${role}`);
    });

    // Administrador envía mensajes a transportadores
    socket.on('adminMessage', (data) => {
        const { transportadorId, message } = data;
        io.to(transportadorId).emit('messageFromAdmin', message);
    });

    // Transportador responde a la empresa
    socket.on('transportadorMessage', (message) => {
        io.emit('messageFromTransportador', { transportadorId: socket.id, message });
    });

    // Unirse a una sala para transportador
    socket.on('joinTransportadorRoom', () => {
        socket.join('transportadores');
        console.log('Transportador conectado a sala');
    });

    // Mensajes a todos los transportadores
    socket.on('broadcastToTransportadores', (message) => {
        io.to('transportadores').emit('messageFromAdmin', message);
    });
});

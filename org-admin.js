module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('adminMessage', (data) => {
            const { transportadorId, message } = data;
            io.to(transportadorId).emit('messageFromAdmin', message);
        });

        socket.on('broadcastToTransportadores', (message) => {
            io.to('transportadores').emit('messageFromAdmin', message);
        });
    });
};

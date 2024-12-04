module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('joinTransportadorRoom', () => {
            socket.join('transportadores');
        });

        socket.on('transportadorMessage', (message) => {
            io.emit('messageFromTransportador', { transportadorId: socket.id, message });
        });
    });
};

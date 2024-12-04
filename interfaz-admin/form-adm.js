// Simulación de transporte de mensajes
const responsesList = document.getElementById('responsesList');
const messageForm = document.getElementById('messageForm');

// Evento de envío del formulario
messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recargar la página

    // Obtener valores del formulario
    const transportador = document.getElementById('transportador').value;
    const message = document.getElementById('message').value;

    if (transportador && message) {
        // Mostrar mensaje en consola (aquí simularíamos el envío)
        console.log(`Mensaje enviado a ${transportador}: ${message}`);

        // Simular respuesta del transportador
        setTimeout(() => {
            const responseMessage = `Respuesta de ${transportador}: ¡Recibido!`;
            displayResponse(responseMessage);
        }, 1000); // Simula un tiempo de espera de 1 segundo
    }

    // Limpiar formulario
    messageForm.reset();
});

// Función para mostrar las respuestas en la lista
function displayResponse(response) {
    const li = document.createElement('li');
    li.textContent = response;
    responsesList.appendChild(li);
}

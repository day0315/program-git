// Simulación de mensajes recibidos
const messages = [
    "Mensaje 1: Por favor confirma la entrega del pedido.",
    "Mensaje 2: Se ha asignado una nueva ruta.",
    "Mensaje 3: Recuerda entregar el paquete antes de las 5 PM."
];

const messagesList = document.getElementById('messagesList');
const responseForm = document.getElementById('responseForm');

// Función para cargar mensajes recibidos
function loadMessages() {
    messages.forEach((message) => {
        const li = document.createElement('li');
        li.textContent = message;
        messagesList.appendChild(li);
    });
}

// Cargar mensajes al inicio
loadMessages();

// Manejo del envío de respuestas
responseForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga de página

    const response = document.getElementById('response').value;

    if (response) {
        console.log(`Respuesta enviada: ${response}`);

        // Simula envío de respuesta (puedes reemplazar con llamada a API)
        alert(`Tu respuesta fue enviada: "${response}"`);

        // Limpiar el formulario
        responseForm.reset();
    }
});

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => console.log('Conectado ao servidor.');

socket.onmessage = (event) => {
    const chat = document.getElementById('chat');
    const msg = document.createElement('p');
    msg.textContent = event.data;
    chat.appendChild(msg);
};

socket.onerror = (error) => console.error('Erro no WebSocket:', error);
socket.onclose = () => console.log('Conexão fechada.');

function enviarMensagem() {
    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.trim() !== "" && socket.readyState === WebSocket.OPEN) {
        socket.send(mensagem);
        document.getElementById('mensagem').value = "";
    } else {
        alert('Conexão não está aberta ou mensagem vazia.');
    }
}
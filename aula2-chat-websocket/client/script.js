const socket = new WebSocket('ws://localhost:8080'); //cria uma conexão websocket com o servidor rodando na porta 8080 - o "socket" representa essa conexao

socket.onopen = () => console.log('Conectado ao servidor.');//quando a conexao com o servidor é feita mostra esse mensagem

socket.onmessage = (event) => { //é acionado um evento sempre que o servidor enviar uma mensagem para esse cliente 
    const chat = document.getElementById('chat'); //pega id=chat no html
    const msg = document.createElement('p'); //cria um elemento p no html
    msg.textContent = event.data; //colocando msg dentro do <p>
    chat.appendChild(msg); //colocamos o <p> dentro do #chat
};

socket.onerror = (error) => console.error('Erro no WebSocket:', error);
socket.onclose = () => console.log('Conexão fechada.');

function enviarMensagem() {//função pra quando o usuario envia mensagem
    const mensagem = document.getElementById('mensagem').value;//pega oq escrevemos no input
    if (mensagem.trim() !== "" && socket.readyState === WebSocket.OPEN) {//trim() remove espaços extras - se nãao estiver vazio e se o websocket estiver aberto
        socket.send(mensagem);//mensagem é enviada pro servidor
        document.getElementById('mensagem').value = "";//pega id mensagem do html e limpamos - no caso um input, assim q enviamos, já é limpo
    } else {
        alert('Conexão não está aberta ou mensagem vazia.');
    }
}
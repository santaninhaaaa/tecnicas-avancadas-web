const WebSocket = require('ws'); //pedindo o websocket pra uso

const server = new WebSocket.Server({ port: 8080 }); //atribuindo o servidor como porta 8080 e criando uma nova instancia com um NOVO SERVIDOR WEBSOCKET

server.on('connection', (socket) => { //(socket) -> representa conexão individual do cliente - acionado toda vez q cliente conecta ao server
    console.log('Cliente conectado.'); //mostra no terminal toda vez que o cliente se conecta

    socket.on('message', (message) => { //quando o cliente envia mensagem, esse evento aciona
        console.log('Mensagem recebida:', message); //assim q envia, é mostrado no console
        
        // Enviar a mensagem para todos os clientes conectados
        server.clients.forEach(client => { //serveer.clients - > contem todas as conexoes ativas
            if (client.readyState === WebSocket.OPEN) { //garante que estamos tentando enviar pra APENAS clientes conectados - verifica se está conectado antes de enviar
                client.send(`Mensagem: ${message}`); //envia a mensagem formatada para os clientes
            }
        });
    });

    socket.on('close', () => console.log('Cliente desconectado.')); //quando cliente fecha a conexão, isso aparece no console do servidor
    socket.on('error', (error) => console.error('Erro no WebSocket:', error)); ///se ocorrrer um erro, isso é mostrado no console
});

console.log('Servidor WebSocket rodando na porta 8080'); //mostrando no terminal que o server está funcionando
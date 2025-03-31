# Técnicas Avançadas Web

**http (web)> protocolo principal**  (half-duplex) \

**outros protocolos:** 
-	ftp (file transport protocol)
-	smtp (servidor de email)
-	ssh
-   websockets (full-duplex)

codigos **http** indicam o status de uma requisição entre cliente e servidor > \

-   codigos 2xx - sucesso
-   codigos 3xx - redirecionamento
-   codigos 4xx - erros do cliente
-   codigos 5xx - erros do servidor

## TCP/IP - Protocolo de internet (base de comunicação na internet)

TCP (transmission control panel)  - garante entrega ordeanda dos pacotes, pacote de transmição
IP (internet protocol) - roteia os pacotes de dados pela internet (IPV4 e IPV6) - IDENTIFICAÇÃO DE CADA DISPOSITIVO

192.168.0.35 -> IPV4 [0-255].[0-255].[0-255].[0-255]
	                 8bits   8bits   8bits   8bits -> 32bits
IPV4 -> problema é que se esgotou rapido esses endereços
1PV6 -> 128 bits, representado tbm em hexadecimal, qtd max. de 340 undecilhões de endereços gerados.

****************************************************

portas e protocolos > 

80	http	web sem criptografia
443	https	web segura (ssl/tsl)
21	ftp	transferencia de arquivos
22	ssh	acesso remoto seguro
3306	mysql	banco de dados mysql
6379	redis	banco de dados em memoria

****************************************************

DNS > domain name system -> //localhost = //127.0.0.1
		google.com = 142.250.217.206

vpn vai trocar com algum outro, no brasil com ip, mas pras atoridades estão com um ip na russi/alemanha,inglaterra  
		
PINg uol.com.br -t

DHCP > dynamic host configuration protocol - evita config. manuais
	distribuição de IPs
	essencial pra redes de wifi e LANs domesticas
	
CDN > content delivery network - melhora performance de sites distribuindo conteudo em servidores ao redor do mundo
- reduz a latencia e melhora velocidade

exemplos de cdn > cloudflare - segurança e cache

# WEBSOCKETS e REST

São duas abordagens diferentes para comunicação entre cliente e servidor.

**Modelo de Comunicação** \
-   ***WebSocket:***
-   ***Rest:***

**Protocolo** \
-   ***WebSocket:***
-   ***Rest:***

**Latência e Eficiência** \
-   ***WebSocket:***
-   ***Rest:***

certbot - pesquisar
heroku alternatives (vercel, netify, digital ocean, railway, supabase)
estudar sobre subir aplicação - serviços gratuitos para subir servidor
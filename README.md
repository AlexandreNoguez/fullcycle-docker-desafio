
**Desafios FullCycle**

Bem-vindo ao repositório dos desafios realizados durante o curso da **FullCycle**. Aqui, você encontrará a solução para os desafios propostos, utilizando ferramentas modernas como Docker, Node.js, MySQL, GoLang, e Nginx. Cada desafio foi projetado para consolidar conceitos importantes de desenvolvimento e infraestrutura.

---

## **Desafios Concluídos**

### **Desafio 1: Imagem GoLang no Docker**
#### Objetivo:
Criar uma imagem Docker que, ao ser executada, imprime a mensagem:
E o tamanho final da imagem não pode ultrapassar **2MB**.

#### Solução:
- Utilizamos o **builder pattern** no Dockerfile para compilar o código Go e gerar um binário estático.
- A imagem base utilizada foi `scratch`, garantindo o tamanho mínimo.
- Publicação da imagem no Docker Hub.

#### Como executar:
```bash
docker run alexandrenoguez/fullcycle:1.0.0
```

#### Link da imagem no Docker Hub:
- https://hub.docker.com/repository/docker/alexandrenoguez/fullcycle

### **Desafio 2: Nginx como Proxy Reverso**
#### Objetivo:
Configurar o Nginx como proxy reverso para uma aplicação Node.js. A aplicação deverá:

Inserir nomes aleatórios em um banco de dados MySQL.
Exibir uma página com a mensagem Full Cycle Rocks! e a lista de nomes cadastrados.
#### Solução:
- Criamos um ambiente completo utilizando Docker Compose, contendo:
- Nginx configurado como proxy reverso.
- Aplicação Node.js para comunicação com o banco MySQL.
- Banco de dados MySQL para persistência.
- Utilizamos o pacote @faker-js/faker para gerar nomes aleatórios e mysql2 para comunicação com o banco.
Como executar:
---
1. Clone o repositório

```bash
git clone https://github.com/AlexandreNoguez/fullcycle-desafio-docker.git
```

```bash
cd fullcycle-challenges
```

2. Suba os containers com Docker Compose
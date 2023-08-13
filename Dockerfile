FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o arquivo package.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do diretório raiz para o diretório de trabalho
COPY . .

# Navegue para o diretório do servidor NestJS
WORKDIR /usr/src/app/apps/api

# Instale as dependências do servidor
RUN npm install

RUN npm run build

# Exponha a porta 3000 para o Nest.js
EXPOSE 3000

# Navegue para o diretório do cliente Next.js
WORKDIR /usr/src/app/apps/client

# Instale as dependências do cliente
RUN npm install

RUN npm run build

# Exponha a porta 3001 para o NextJS
EXPOSE 3001

WORKDIR /usr/src/app/

# Defina os comandos de inicialização do servidor e do cliente
CMD ["npm", "run", "start"]


FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/apps/api

RUN npm install

RUN npm run build

EXPOSE 3000

WORKDIR /usr/src/app/apps/client

RUN npm install

RUN npm run build

EXPOSE 3001

WORKDIR /usr/src/app/

CMD ["npm", "run", "start"]


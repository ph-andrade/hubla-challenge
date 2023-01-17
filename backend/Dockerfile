FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333

CMD [ "npm", "run", "start:migrate:prod" ]

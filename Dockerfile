FROM node:8.16-alpine

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

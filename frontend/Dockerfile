FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install node-sass@4.14.1

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
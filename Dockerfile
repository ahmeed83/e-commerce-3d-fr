FROM node:14.4-alpine3.11
WORKDIR /app
COPY . /app
RUN npm install
CMD npm start
EXPOSE 3000
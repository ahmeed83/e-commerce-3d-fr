FROM node:14.4-alpine3.11
WORKDIR /app
ADD package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]

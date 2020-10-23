### STAGE 1: Build ###
FROM node:12.7-alpine 
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm install nodemon
COPY . .


# RUN npm start
EXPOSE 8080
CMD ["npm", "start" ]


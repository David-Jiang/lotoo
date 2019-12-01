FROM node:10
WORKDIR /usr/src/app

COPY dist/ ./dist
COPY index.js ./index.js
COPY package-server.json ./package.json

RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
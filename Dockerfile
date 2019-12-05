FROM node:10
WORKDIR /usr/src/app

COPY dist/ ./dist
COPY server.js ./server.js

RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
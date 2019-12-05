FROM node:10
WORKDIR /usr/src/app

COPY dist/ ./dist
COPY package-server.json ./package.json
COPY index.js ./index.js
COPY .babelrc ./.babelrc

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["babel-node", "server.js"]
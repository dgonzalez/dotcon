FROM node:18

COPY package.json /app/package.json
COPY index.mjs /app/index.mjs

WORKDIR /app/

RUN npm install

CMD node index.mjs

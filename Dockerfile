FROM node:18-alpine
WORKDIR /mindscape/


COPY public/ /mindscape/public
COPY src/ /mindscape/src
COPY package.json /mindscape/


RUN npm install

CMD ["npm", "start"]
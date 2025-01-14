FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DOCKERIZE_VERSION v0.9.2

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

EXPOSE 3000

ENTRYPOINT ["dockerize", "-wait", "tcp://mysql-db:3306", "-timeout", "20s"]

CMD ["npm", "start"]

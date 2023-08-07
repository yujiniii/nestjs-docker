FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build

EXPOSE 3000

# delay 20s to wait for database to be ready
CMD ["sh", "-c", "sleep 40 && npm run start:prod"]

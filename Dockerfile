FROM node:12.13.0-alpine

WORKDIR /app

COPY ./package*.json /app
COPY ./yarn.lock /app
RUN yarn
ADD . /app
RUN yarn build

EXPOSE 3000
CMD yarn start

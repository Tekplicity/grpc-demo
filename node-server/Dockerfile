FROM node:7-alpine

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn config set cache-folder ~/.yarn-cache \
    && yarn global add node-gyp \
    && yarn install --force

FROM node:6-alpine

WORKDIR /opt/app

ADD package.json yarn.lock /tmp/

RUN cd /tmp \
    && yarn config set cache-folder ~/.yarn-cache \
    && yarn global add node-gyp \
    && yarn install --force

# Link node_modules directory
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app

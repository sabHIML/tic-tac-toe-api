FROM node:10-alpine

# set working directory
RUN mkdir -p /usr/src/app/ttt-server
#copy all files from current directory to docker
COPY . /usr/src/app/ttt-server

WORKDIR /usr/src/app/ttt-server

RUN yarn

EXPOSE 1111

# start app
ENTRYPOINT ["yarn", "start"]

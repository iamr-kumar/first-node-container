FROM node:latest
WORKDIR /app
ADD package.json ./
RUN yarn install
ADD . .
RUN yarn build
CMD yarn start


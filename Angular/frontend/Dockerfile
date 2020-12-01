# -------------- STAGE 1: Build --------------

FROM node:10.16.0-alpine as builder
LABEL maintainer="Nikos Anifantis"

# set working directory
WORKDIR /frontend
# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install and cache frontend dependencies
COPY package.json /frontend/package.json
RUN npm install

# add frontend source
COPY . /frontend

# replace host URL at production
ARG API_HOST
RUN sed -i "s~API_HOST_REPLACE~$API_HOST~g" ./src/environments/environment.prod.ts

## Build the angular app in production mode
RUN ng build --prod


# -------------- STAGE 2: Run --------------

FROM nginx:1.17.0-alpine
LABEL maintainer="Nikos Anifantis"

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /frontend/dist/frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

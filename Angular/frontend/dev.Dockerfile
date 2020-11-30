# -------------- STAGE 1: Build --------------

FROM node:10.16.0-alpine
LABEL maintainer="Nikos Anifantis"

# set working directory
WORKDIR /frontend
# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /frontend/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /frontend


# -------------- STAGE 2: Run --------------

CMD ng serve --host 0.0.0.0 --poll 1000

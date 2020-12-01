# -------------- STAGE 1: Build --------------

FROM node:10.16.0-alpine
LABEL maintainer="Nikos Anifantis"

# set working directory
WORKDIR /backend
# add `/backend/node_modules/.bin` to $PATH
ENV PATH /backend/node_modules/.bin:$PATH

# install and cache backend dependencies
COPY package.json /backend/package.json
RUN npm install

# add backend source
COPY . /backend


# -------------- STAGE 2: Run --------------

# Run npm script
CMD ["sh", "-c", "npm run start:${ENVIRONMENT}"]

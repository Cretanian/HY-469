# [ami-fullstack-template] Integration for Docker Deployment
Integration-related helper files for docker.

This project is used to describe the project's stack and provide the files for spinning up the system. The docker-compose file contains 3 basic services that should be included. Feel free to modify your local copy of the docker-compose file according to your needs.

Note: A working installation of Docker is required to run the project. If you haven't installed Docker yet you can get it here: [Get Docker](https://www.docker.com/community-edition)

### Folder structure 
The following folder structure is required:
- `backend`
- `frontend`
- `integration`


# Getting started


## 1. Configuration
### We use a enviromental variable file to init the credentials `.env`
### Important change the APP_NAME (under INTEGRATION CONFIG -) to your teams number -> teamXX
- Change any value of properties in that file

## 2. Integration
After the initialization process we run and build the docker containers in two different environment (development or production) :shipit:
### Development
- Run immediate command:
```
$ docker-compose up -d 
```

### Production
- **Option 1:** Run immediate command:
```
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
- **Option 2:** Copy and rename `docker-compose.prod.yml` file to ` docker-compose.override.yml` and run command:
```
$ docker-compose up -d
```


# Usefull docker commands
- To run the project open a command line on the root folder (where the docker-compose.yml is located) and type the following command. The `-d` attribute is for running the services in detached mode. If it is not provided the full logs from all services will be printed on the screen. 
```
$ docker-compose up
```

 - To stop and remove the running services (docker containers) type the following command: 
```
$ docker-compose down
```

- You can start, stop and restart a specific service of the docker-compose file by using the respective commands:
```
$ docker-compose start backend
$ docker-compose stop backend
$ docker-compose restart backend
```

 - Inspect logs of container: 
```
$ docker-compose logs -f backend
```
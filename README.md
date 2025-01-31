## How to implement a load balancer with NGINX and docker

### Setup

- Go to each backend directory and run `npm i` in your terminal using node 20 to install the packages.

- Create a .env file in backend-1 and add the port for the service to run on:

```
 PORT=4000
```

- Create a .env file in backend-2 and add the port for the service to run on:

```
 PORT=3000
```

- Build and run the docker containers for NGINX and the backend services:

```
docker-compose -f docker-compose.yaml up -d

```

### Using the application load balancer

Once the docker containers are built and running successfully, make a get request to http://localhost:80/v1/ using either your browser, Curl or any REST api client of your choice. eg. Postman.

You will notice that each time you make a request, it is routed to a different server application. A use case for load balancers is to distribute load across multiple instances of your server application to minimize traffic.

This load balancer setup uses a round robin algorithm to distribute requests equally to both backend applications.

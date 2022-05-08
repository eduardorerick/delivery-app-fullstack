# Delivery app fullstack ~ONGOING PROJECT
First full stack project to study Express making a CRUD, auth and jwt strategy. Using Prisma ORM and Postgres. 
For front-end i use React with MaterialUI


![image](https://user-images.githubusercontent.com/82004348/167314290-ff4aa830-690d-4b78-b12c-1b3f58f7ce2c.png)


## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.26.2`)
- [nodejs](https://nodejs.org/en/) (I've used version `v16.15.0`)
- NPM (I've used version `8.5.5`)
- [Yarn](https://yarnpkg.com/) (I've used version 1.22.15)
- [Docker](https://www.docker.com/) (I've used Docker version 20.10.14 with Docker Desktop and wsl2)
**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

First clone the repo into your machine with: 
`git clone https://github.com/eduardorerick/nestjs-bookmarks.git`

To install the dev dependencies, run: 
`yarn`

## Configuring the environment variables

I uploaded the env files so you can use it for test!

## Importing to insomnia

You can import the `Delivery App - API.json` file to Insomnia to see all the endpoints

## Running the database 

In this project, I run the database with a postgres image on docker.

Inside the api folder, you can run the database and run the migrations with the command: 
`yarn db:dev:restart`

### Running the server 

Inside folder web, run `yarn start` to run the server on port 3000.

---


Images of app in use : 


## CLIENT 

![image](https://user-images.githubusercontent.com/82004348/167314321-44b68251-8db0-4e9a-98e9-c53389559e02.png)
Wrong login

![image](https://user-images.githubusercontent.com/82004348/167314340-aa9217b9-72a2-42df-a27b-6f9cb8444dc1.png)
New product

![image](https://user-images.githubusercontent.com/82004348/167314348-660e231d-ff4d-4d82-8538-5a44b9397cb5.png)
My products page

## DELIVERYMAN

![image](https://user-images.githubusercontent.com/82004348/167314361-5ab0acd5-6888-461c-a73e-fff736f9675b.png)
Login as deliveryman

![image](https://user-images.githubusercontent.com/82004348/167314379-bc86dfaa-0838-4c94-8019-3eb605f4845d.png)
Accept new deliveries

![image](https://user-images.githubusercontent.com/82004348/167314392-878379ce-ec73-494c-b953-b1124933953c.png)
Ongoing deliveries

//
Made with ❤️ by [Eduardo Rerick](https://github.com/eduardorerick).

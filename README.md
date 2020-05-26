# Api-inventory Managemnet

## Description
This is an inventory management application a platform that shows
inventory status of different categorized items/products in
stock.
## Technologies used

Javascript/Nodejs
Mongodb/mongoose

###### server-side frameworks

Node/Express

## Installation

Before starting  the  following  software was installed on the development machine

`run npm install` to install the node packages

Have Nodemon installed globally by running 

`npm i nodemon -g`

## Run the app

A step by step examples on how to get application development environment running

1. run  `npm i`

To install all the necessary packages on your local computer

To start your sever `npm start`

This will start the application and run on port 3000


### Endpoints  : Route('api/v1/')

Method| Route |Action/End point | Access 
---------|-----------------|--------------------|-----------
POST | `('/users/auth/signup')` |Register/signUp | Users 
POST |`('/users/auth/signin')` | Login/login | Users  
PUT| `('/inventory/:id')` | Replace Stock | Users
GET | `('/inventory')` | Get all inventory | Users 
DELETE| `('/inventory/:id')` | delete Stock  | Users
POST | `('/inventory/category')` | Create Category | Users 
GET | `('/inventory/categories')` | Get All Categories in stock | Users 
GET |`('/inventory/category/:categoryId')` | Get specific Category | Users
POST | `('/inventory/:categoryId/items')` |createItemByCategory | Users 
GET | `('/inventory/:categoryId/items/:itemId')` |Itemi in Category | Users 

#### Pivotal Tracker story board

https://www.pivotaltracker.com/n/projects/2447534

#### Github link

https://github.com/Ayesiza/api-invetory


### Status Codes used

###### Success Response:

code: 200 OK

code: 201 CREATED

###### Error Response:

Code: 404 NOT FOUND 

Code: 400 BAD REQUEST

Code: 403 UNAUTHORIZED 

Code: 405 METHOD NOT ALLOWED

#### server Error

code: 500 INTERNAL SERVER ERROR

### Authors

- EDU coreII group3


### Acknowledgments
 
 - My thanks goes to our Learning Facilitator
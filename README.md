# Introduction

This is a small REST API which is built to be used in Android Devlopment.

# Tech Stack

M - MongoDB
E - Express.js
R - React.js
N - Node.js



# Instructions on how to use  the Repository to the fullest

You can fork the repository in order to make the API even more powerful.

![Semantic description of image](/Login-System-with-Nodejs/resources/Forked.gif "Image Title")


After forking the Repository you can clone the project in your local machine,by copying the git url of the repository.



### To install all the dependencies you need to:- 

```bash
$   npm install
```
```bash
$   cd frontend/
```
```bash
$   npm install
```

```bash
$   cd ..
```

# Starting the Projects
Before running the project you need to initiate and create a DB from MongoDB Atlas which is **100% Free**.

And you need to create a `.env` file in order to connect the _Back-End Server_ with the _MongoDB Database_.

## Creating the MonogoDB Database




There are two ways to run the project,

1. Run two projects in two different terminals.

```bash
$   cd frontend/
```

```bash
$   npm run client
```


Open a new Terminal and :

```bash
$   npm run server
```

2. Use the Developer Dependency Concurrently

```bash
$   npm run dev
```
> NOTE: Make sure you have the developer dependency `Concurrently` to use this command in the CLI

Usually this will be the success text in console log:

```bash
$   Server Started on Port http://localhost:4000/
$   MongoDB Connected : name of your MongoDB
```


## Here are the list of Dependencies needed to run the project

|Serial Number|Dependencies|Version |Installation code for CLI
|-----|------|----|-----|
|1|bcryptjs|^2.4.3|`npm install bcrypt.js`
|2|body-parser|^1.20.0|`npm install body-parser`
|3|colors|^1.4.0|`npm install colors`
|4|dotenv|^16.0.1|`npm install dotenv`
|5|express|^4.18.1|`npm install express`
|6|express-async-handler|^1.2.0|`npm install express-async-handler`
|7|jsonwebtoken|^8.5.1|`npm install jsonwebtoken`
|8|mongoose |^6.4.3|`npm install mongoose`
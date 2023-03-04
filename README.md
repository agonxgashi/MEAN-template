---
title: MEAN Stack template application
Author: Agon Gashi (agonxgashi)
Tags: MEAN Stack application template
---

# MEAN-template
**A simple (MongoDB, Express, Angular, Node) application template that works.**

<details>
  <summary>NOTICE: This MEAN Stack template is for learning purposes only and should not be used in production environments.</summary>

    This template is intended to help you get started with the MEAN (MongoDB, Express.js, Angular, and Node.js) stack and learn the basics of building web applications using these technologies. It includes some basic functionality and a simple architecture to help you understand how these technologies work together.

    However, please note that this template is not intended for use in production environments. It has not been thoroughly tested and does not include many of the security features and best practices that are necessary for a production application. Using this template in a production environment could result in serious security vulnerabilities and other issues.

    If you're looking to build a production-ready application using the MEAN stack, we recommend that you consult with experienced developers and follow established best practices and security guidelines.

    In short, have fun exploring the MEAN stack with this template, but use it for learning and experimentation only, not in production environments.

    This simple template is meant to be used as a starting point for your next super-big MEAN Aplication. It is very easy to run and the comments should make every line of code I've written understandable (if not, feel free to propose changes 😉). It uses a minimum number of npm packages that are crucial to make the application work. Used packages are described below.
</details>

### Downloaded from npm

+ **express**: *Express is a minimal and flexible Node.js web application
framework that provides a robust set of features for web and mobile applications.*
+ **mongoose**: *Mongoose provides a straight-forward, schema-based solution to
model your application data. It includes built-in type casting, validation,
query building, business logic hooks and more, out of the box.*
+ **path**: *The path module provides utilities for working with file and
directory paths.*


### Folder structure

+ **/src**: *Angular app created using ```angular/cli```.*
+ **/repo**: *Contains mongoose Schemas*
+ **/server**: *Files to be used on server-side*
    * **/routes**: *Declared routes to be imported on ```index.js```*
+ **/license**: *Feel free to use. Repo comes with MIT license* 😎
+ **/index.js**: *File that is used to start the node server*


### Usage

+ Prerequisites
    + **[Node.js & npm](https://nodejs.org/en/download/)**: *Please be sure you have installed Node.js and npm module on your computer before running the application*
    + **[MongoDB](https://www.mongodb.com/download-center)**: *Download & Install MongoDB, and make sure it's running on the default port (27017).*
    + **[AngularCLI](https://cli.angular.io/)**: *Is used to build front-end application.*
+ Be sure you have started MongoDB service before running the application
+ Navigate on project folder
+ Run ```ng build``` to generate Angular necessary files. Output files are by default created on ```/dist``` subfolder
+ Now run ```node index.js``` This is the last step and if everything goes right, the server will start listening for requests
+ You can open your browser and navigate to localhost:3000 to see if the application works

___

Feel free to fork this repo or contact me on [Telegram](http://t.me/agonxgashi)

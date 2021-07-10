## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deploy 

https://limitless-hamlet-12356.herokuapp.com/

## Description:
An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books. Users are notified of saving or deleting books from the db using Socket.io.

## Technologies:
- Bootstrap
- Node.js
- React
- React-Dom
- Axios
- ExpressJS
- Mongoose
- MongoDB
- jQuery

## Table of Contents
* [Description](#description)
* [Technologies](#topics)
* [Installation](#installation)
* [How it works](#howitworks)
* [License](#license)
* [Badges](#badges)

## Installation
Before installing this application on your local computer, ensure that you have Node, NPM and MongoDB installed globally on your machine. This application works in Node. You can go to the following website to download Node: <a href='https://nodejs.org/en/'>Node</a>

This is a react act application.

Installation:

    - clone the repo or download the zip file to your local machine
    - open repo in vscode or text editor of choice
    - npm install

To Start Server:

    - npm start

To Visit App:

    - localhost:3000

## How It Works

1. Users are first directed to the Home page where they can search for any book they're interested in. The Book information 
is access via the publicly available Google Books API.

2. In the Home page, a user can click on the View Book button. This will redirect them to the Google Books store page where they can either purchase or read a preview of the book.

3. Upon searching for a book, users will see a list of relevant results. They can click save to save the book to the Saved Books page. The data of their Saved Books gets saved to the Mongo database.

![Google Books Search Demo](client/src/assets/google-book-search.gif)

## License
This repository is licensed under the MIT license.

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


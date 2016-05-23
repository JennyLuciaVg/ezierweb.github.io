# Installation

### Backend

Install all dependencies

    composer install

Create database

    mysql -uhomested -psecret
    create database example;

Create .env based on .env.example (configure DB_DATABASE param)

    cp .env.example .env

Build database schema and load data

    php artisan dat


### Frontend

Install gulp and bower globally

    npm install -g bower gulp


Create config.json based on config.json.example (configure apiPath param)

    cp config.json config.json.example

Install all dependencies

    bower install
    npm install
    

####Gulp tasks

Run ```gulp or gulp build``` to build an optimized version of your application in /dist

Run ```gulp serve``` to launch a browser sync server on your source files

Run ```gulp serve:dist``` to launch a server on your optimized application
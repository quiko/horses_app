## Horses_app
This is an educational project based on the MEAN stack :
* [MongoDB](https://www.mongodb.com/fr-fr)
* [Express](http://expressjs.com/)
* [Angular](https://angular.io/)
* [Nodejs](https://nodejs.org/en/)

The app imitates an [MVC Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). 
For now, it showcases mainly an authenticated api using
[JWT](https://jwt.io/) and [passportjs](http://www.passportjs.org/) middleware.

## Diagram
![alt text](https://github.com/quiko/horses_app/blob/main/Untitled%20Diagram.drawio.png)

## Setup to run locally
You will need either MongoDB runing via Docker or locally, or to setup a project on
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and copy the URI into server/config/keys : dbUrl.
then run the following commands :
```bash
cd client
ng serve
```
```bash
cd server
npm run start-dev
```

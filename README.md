# HUNT
A simple, customizable tool to stay organized on the job hunt.
Deployed [here](https://malilasage-hunt.herokuapp.com/landing)

[Learn](learn.md) about the site  
[Start](#code) playing with the code

## <a name="code"></a> Getting Started
This project is built using the MEAN stack. To learn more about setting up a project using this stack, follow this tutorial on [scotch.io](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application).

### Prerequisites
Must have MongoDB set up and be running Mongo locally.

### Installing
Install npm packages
`npm install`

There are two options to start the server. You can either run it with nodemon or browser-sync. Personally, I have found browser-sync to be a little slow.
```
//nodemon
npm install --save nodemon
nodemon server/server.js

//browser-sync
npm start
```

### Deployment
Follow [this](https://scotch.io/tutorials/use-mongodb-with-a-node-application-on-heroku) tutorial from scotch.io and [this](https://devcenter.heroku.com/articles/mongolab) one from Heroku to deploy. Heroku does not support Mongo, but provides an add-on with MongoLab for deployment of MEAN apps.

You will also need to have a .env file set up with a key for the Indeed API and keys for MongoLab, which are covered in the above tutorials.

### Authors
* Malila Clearwater - [malilasage](https://github.com/malilasage)

If you run into any bugs, please let me know by submitting an issue!

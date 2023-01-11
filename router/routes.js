const express = require('express');
const userRouter = require('./user.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/auth', userRouter);
  
  }

module.exports = routerApi;
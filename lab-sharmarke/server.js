'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const debug = require('debug')('car:server');
const carRouter = require('./route/car-route.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/listofcarss';

app.listen(PORT, () => {
  debug(`listening on ${PORT}`);
});

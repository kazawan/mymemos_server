const express = require('express');
const useapp = require('./src/use/useapp')


const app = express();
useapp(app)


module.exports = app;
const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/users', require('./Routes/users'))
app.use('/notes', require('./Routes/prospects'))


module.exports = app;
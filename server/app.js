const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRoutes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', apiRoutes);

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

require('./model');

const app = express();

const apiRoutes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const swaggerSpec = require('./swagger');

// get swagger documentation
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/', apiRoutes);

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Simple Public Chat API',
        version: '1.0.0',
        description: 'RESTFULL API for Simple Public Chat'
    },
    host: 'localhost:3000',
    basePath: '/'
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./server/routes/*.js']
};

module.exports = swaggerJSDoc(options);
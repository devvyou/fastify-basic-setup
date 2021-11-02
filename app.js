// Loading environment variables
require('dotenv').config();

// Requiring packages
const fastifyHelmet = require('fastify-helmet');
const connectDb = require('./db/connectDb');
const fastify = require('fastify')();
const AutoLoad = require('fastify-autoload');
const path = require('path');
const PORT = process.env.PORT;

connectDb(); // Db functionality

// Registering routes and other functionalities..

fastify.register(
    fastifyHelmet,
    {
        enableCSPNonces: true,
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: [
                    function (req, res) {
                        res.scriptNonce = require('crypto').randomBytes(16).toString('hex');
                    }
                ]
            }
        }
    }
)

fastify.register(
    require('fastify-compress'),
    { requestEncodings: ['gzip'] },
);

fastify.register(require('./plugins/index'))

fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
});

// Starting the server on port 3000
const start = async () => {
    try {
        await fastify.ready();
        await fastify.listen(PORT);
        console.log('on: ', PORT);
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
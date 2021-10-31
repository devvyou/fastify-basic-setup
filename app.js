require('dotenv').config();
const connectDb = require('./db/connectDb')
const fastify = require('fastify')();
const AutoLoad = require('fastify-autoload');
const path = require('path');

connectDb();

fastify.register(require('./plugins/index'))

fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
})

const start = async () => {
    try {
        await fastify.listen(3000);
        console.log('on 3000');
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
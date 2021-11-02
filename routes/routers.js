// Requiring controllers
const { getHome, getAuth, getGenres, getGzip } = require('../controllers/controller');

function itemRoutes(fastify, options, done) {

    // Get all items
    fastify.get('/genres', getGenres);

    // Get single items
    fastify.get('/home', getHome);

    fastify.get('/auth', getAuth);

    fastify.get('/gzip', getGzip);

    return done()

}

module.exports = itemRoutes
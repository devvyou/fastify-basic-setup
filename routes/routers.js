const { getItemId, getHome } = require('../controllers/controller')

function itemRoutes(fastify, options, done) {

    // Get all items
    fastify.get('/', (req, reply) => {
        return fastify.music();
    })

    // Get single items
    fastify.get('/home', getHome)

    return done()

}

module.exports = itemRoutes
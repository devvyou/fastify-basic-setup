const { getAuth } = require('../controllers/controller')

function itemRoutes(fastify, options, done) {

    // Get all items
    fastify.get('/getAuth', (req, reply) => {
        reply.send('getAuth --')
    })

    return done()

}

module.exports = itemRoutes
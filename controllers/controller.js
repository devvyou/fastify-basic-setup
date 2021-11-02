module.exports = {

    getAuth: (req, reply) => {
        reply.send('getAuth');
    },

    getHome: (req, reply) => {
        reply.send(reply.raw.scriptNonce)
    },

    getGzip: (req, reply) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        reply.send('getGzip')
    },

    getGenres: (req, reply) => {
        console.log(fastify.music());
        reply.send(fastify.music()); // plugins/index.js
    }

}
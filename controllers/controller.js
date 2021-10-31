// const getItemId = (req, reply) => {
//     reply.send('getItemId');
// }

// const getHome = (req, reply) => {
//     reply.send('getHome');
// }

// const getAuth = (req, reply) => {
//     reply.send('getAuth');
// }

// module.exports = {
//     getItemId,
//     getHome,
//     getAuth
// }

function itemControllers(fastify, options, done) {

    // Get all items
    const getAuth = function (req, reply) {
        reply.send('getAuth');
    }

    return done()

};

module.exports = itemControllers;
const fastifyPlugins = require('fastify-plugin'); // Fastify plugin pacakge
const faker = require('faker'); // Fake data plugin

const genres = [...Array(10)].map((v, index) => ({
    id: index,
    genre: faker.music.genre()
}))

const plugin = fastifyPlugins(async function plugin(fastify, opts, done) {
    fastify.decorate('music', val => {
        if (val) {
            genres.push({ id: genres.length, genre: val })
        }

        return genres;
    })
})

module.exports = plugin;


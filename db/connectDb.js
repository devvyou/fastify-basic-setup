const mongoose = require('mongoose')

const connectDb = () => {

    mongoose.connect(process.env.MONGO_API_KEY)
        .then(() => console.log('connected to mongodb'))
        .catch(err => console.log(err));

}

module.exports = connectDb;
// Exporting the connectDb function to app.js

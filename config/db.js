const mongoose = require('mongoose')

mongoose
    .connect(`mongodb+srv://${process.env.PASS}@game-db.bbxlq.mongodb.net/test`, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(`Failed to connect to MongoDB : ${err}`))
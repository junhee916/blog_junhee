const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(process.env.MONGODB_URI, options)
    .then(_ => console.log("connected mongoodb..."))
    .catch(err => console.log(err))
// const mongoose = require('mongoose')
//
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
//
// mongoose
//     .connect(process.env.MONGODB_URI, options)
//     .then(_ => console.log("connected mongoodb..."))
//     .catch(err => console.log(err))

const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongodb connected... ")
    }catch (err){
        console.log(err.message)
        process.exit(1)
    }

}

module.exports = connectDB
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required: true
        },
        password : {
            type : String,
            required : true
        },
        role : {
            type : String,
            default : "user"
        },
        profileImage : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('user', userSchema)
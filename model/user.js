const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const normalize = require('normalize-url')

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

userSchema.pre('save', async function(next){
    try{

        console.log('entered')
        // profileImage 생성
        const avatar = normalize(
            gravatar.url(this.email, {
                s : '200',
                r : 'pg',
                d : 'mm'
            }),
            {forceHttps: true}
        )

        this.profileImage = avatar
        // password 암호화
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password, salt)

        this.password = passwordHash

        console.log('exited')

        next()
    }catch (err){
        next(err)
    }
})

module.exports = mongoose.model('user', userSchema)
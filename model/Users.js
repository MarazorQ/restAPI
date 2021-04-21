import mongoose from "mongoose"

const User = new mongoose.Schema({
    username: {type: String, unique: true ,required: true},
    password: {type: String, required: true},
    roles: [{type: String, Ref: 'Role'}]
})

export default mongoose.model('User', User)
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    family_name:  {
        type: String,
        required: true
    },

    given_name: {
        type: String,
        required: true
    },

    picture: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})


const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;
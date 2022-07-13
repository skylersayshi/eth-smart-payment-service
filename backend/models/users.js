import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    },
    twitter: {
        type: String
    },
    bio: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    profilePic: String
});

export default mongoose.model("User", userSchema);
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Id: {
        type: Number,
        unique: true,
        default: 0
    },
    utype: {
        type: Number,
        enum: [1, 2],
        default: 2
    },
    name: {
        type: String,
        default: null
    },
    uname: {
        type: String,
        unique: true,
        message: "Please try a different user name!!!",
        default: null
    },
    address: {
        type: String,
        unique: true,
        required: true
    },
    profile: {
        type: String,
        default: null
    },
    cover: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    instagram: {
        type: String,
        default: null
    },
    twitter: {
        type: String,
        default: null
    },
    website: {
        type: String,
        default: null
    },
    verified: {
        type: Number,
        enum: {
            values: [1, 2],
            message: 'Value must be 1 if you have a verified tick else 2',
            default: 2
        }
    },
    status: {
        type: Number,
        enum: {
            values: [1, 2, 3],
            default: 1
        }
    },
    created_by: {
        type: Number,
        enum: [1,2],
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_ip: {
        type: String,
    },
    modified_by: {
        type: Number,
        enum: [1,2],
        default: null
    },
    modified_at: {
        type: Date,
        default: null
    },
    modified_ip: {
        type: String,
        default: null
    }
});

var User = mongoose.model('User',UserSchema);

export default User;
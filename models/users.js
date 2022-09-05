import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    utype: {
        type: Number,
        enum: [1, 2],
        default: 2
    },
    name: {
        type: String,
    },
    uname: {
        type: String,
        unique: true,
        lowercase: true,
    },
    address: {
        type: String,
        unique: true,
        required: true
    },
    profile: {
        type: String
    },
    cover: {
        type: String
    },
    bio: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    website: {
        type: String
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
            values: [1, 2],
            default: 1
        }
    },
    created_by: {
        type: Number,
        enum: {
            values: [1,2],
            default: 1
        }
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
        enum: {
            values: [1,2],
            default: null
        }
    },
    modified_at: {
        type: Date,
        default: null
    },
    modified_ip: {
        type: String,
        default: null

 
    }
})

module.exports = User = mongoose.model('user',UserSchema);
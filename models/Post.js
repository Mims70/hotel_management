const mongoose = require('mongoose');

const Schema = mongose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: trusted
    },
    body: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
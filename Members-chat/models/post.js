const mongoose = require('mongoose')
const {DateTime} = require('luxon')

const Schema = mongoose.Schema

let PostSchema = new Schema(
    {
        title: {type: String, required: true},
        text: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User'},
    },
    { timestamps: true}
)

PostSchema
    .virtual('createdAt_format')
    .get(function () {
        return this.createdAt ? DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED) : '';
    })

module.exports = mongoose.model('Post', PostSchema)
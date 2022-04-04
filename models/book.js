var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
        summary: {type: String, requried: true},
        isbm: {type: String, required: true},
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    }
);

module.exports = mongoose.model('Book', BookSchema);
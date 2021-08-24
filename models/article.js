import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
    preview: String,
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 80
    },
    tags: [String],
    timePeriod: {
        start: Number,
        end: Number
    },
    map: {
        length: Number,
        points: [ {
            lat: Number,
            lng: Number
        } ]
    },
    rating: {
        views: Number,
        likes: Number,
        dislikes: Number,
        relevance: Number
    },
    description: String
}, { timestamps: true })

export const Article = mongoose.models.articles || mongoose.model('articles', ArticleSchema)
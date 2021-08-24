import connectDB from '../../middlewares/connectDB'
import { Article } from '../../models/article'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const places = req.query.places.split(',')
                const subjects = req.query.subjects.split(',')
                const articles = await Article.find({ $and: [ places & { tags: { $in: places } }, subjects & { tags: { $in: subjects } } ] }).sort({rating: -1})
                res.status(200).json(articles)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break
        case 'POST':
            try {
                let { title, preview, tags, start, end, rating} = req.query

                let validatedTags = []
                tags.split(',').forEach( id => {
                    Article.countDocuments({_id: id}, function (err, count){ 
                        if (count > 0) validatedTags.push(id)
                    })
                })

                let article = await Article.create({
                    title: title,
                    preview: preview,
                    tags: validatedTags,
                    time: {start: start, end: end},
                    rating: rating
                })
                res.status(200).send(article)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break
        default:
            res.status(400).end()
            break
    }
}

export default connectDB(handler)
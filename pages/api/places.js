import connectDB from '../../middlewares/connectDB'
import { Place } from '../../models/tags'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                res.status(200).json(await Place.find({}))
            } catch (error) {
                res.status(400).send(error.message)
            }
        default:
            res.status(400).end()
            break
    }
}

export default connectDB(handler)
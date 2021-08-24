import mongoose from 'mongoose'

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxLength: [20, 'Should\'nt be longer than 20 characters']
    },
    rating: Number
})

export const Place = mongoose.models.places || mongoose.model('places', TagSchema)
export const Subject = mongoose.models.subjects || mongoose.model('subjects', TagSchema)
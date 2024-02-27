import { Schema, model } from "mongoose";

const MovieSchema = Schema({
    name: String,
    year: Number,
    runtime: Number,
    categories: [String],
    'release-date': Date,
    director: String,
    writer: [String],
    actors: [String],
    storyline: String
})

export default model('movie', MovieSchema)
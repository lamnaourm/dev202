import { Schema, model } from "mongoose";

const DirectorSchema = Schema({
    name: String,
    birthname: String,
    birthdate: Date,
    birthplace: String
})

export default model('director', DirectorSchema)
import { Schema, model } from "mongoose";

const ActorSchema = Schema({
    name: String,
    birthname: String,
    birthdate: Date,
    birthplace: String
})

export default model('actor', ActorSchema)
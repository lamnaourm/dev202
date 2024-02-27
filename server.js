import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import actor from './routes/actor.js'
import director from './routes/director.js'
import movie from './routes/movie.js'

dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000
const url = process.env.URL_MONGOOSE
const dbname = process.env.DBNAME

mongoose.connect(`${url}/${dbname}`)
    .then(() => {
        console.log('Connected to Mongo')
    })
    .catch((err) =>{
        console.log('Unable to Connect to Mongo')
    })

app.use('/actor', actor)
app.use('/director', director)
app.use('/movie', movie)

app.listen(port , (err) => {
    if(!err)
        console.log('Server started')
    else
        console.log('Unable to start Server')
})




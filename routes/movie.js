import express from 'express'
import MovieModel from '../models/Movie.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    MovieModel.find({})
    .then((movies) => {
        res.json(movies)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.get('/actors/:filmname', (req, res) => {
    
})

routes.get('/listcategory/:category', (req, res) => {
    
})

routes.get('/years/:year1/:year2', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.put('/delete/:name', (req, res) => {
    
})



export default routes
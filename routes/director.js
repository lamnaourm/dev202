import express from 'express'
import DirectorModel from '../models/Director.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    DirectorModel.find({})
    .then((directors) => {
        res.json(directors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.get('/names', (req, res) => {
    
})

routes.get('/movies', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.put('/delete/:name', (req, res) => {
    
})


export default routes
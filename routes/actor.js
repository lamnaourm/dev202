import express from 'express'
import ActorModel from '../models/Actors.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    ActorModel.find({})
        .then((actors) => {
            res.json(actors)
        })
        .catch((err) => {
            res.sendStatus(510)
        })
})

routes.get('/names', (req, res) => {
    ActorModel.find({},{_id:0, name:1})
    .then((actors) => {
        res.json(actors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
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
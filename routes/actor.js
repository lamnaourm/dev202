import express from 'express'
import ActorModel from '../models/Actors.js'
import MovieModel from '../models/Movie.js'

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
    MovieModel.aggregate([{$unwind:"$actors"},{$group:{_id:"$actors", nb_movies:{$sum:1}}}])
    .then((actors) => {
        res.json(actors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.post('/add', (req, res) => {
    const actor = req.body;
    const newActor = ActorModel(actor)
    newActor.save()
        .then((a) => {
            res.status(201).json(a)
        })
        .catch((err) => {
            res.status(510)
        })
})

routes.put('/update/:name', (req, res) => {
    const name = req.params.name;
    const actor = req.body;

    ActorModel.updateOne({name:name}, actor).then(() => {
        res.send(`${name} updated`)
    }).catch((err) => {
        res.send('Unable to update actor : ' + err)
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name = req.params.name;

    ActorModel.deleteOne({name:name}).then(() => {
        res.send(`${name} deleted`)
    }).catch((err) => {
        res.send('Unable to delete actor : ' + err)
    })
})

export default routes
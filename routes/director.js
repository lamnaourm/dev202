import express from 'express'
import DirectorModel from '../models/Director.js'
import MovieModel from '../models/Movie.js'

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
    DirectorModel.find({},{_id:0, name:1})
    .then((directors) => {
        res.json(directors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.get('/movies', (req, res) => {
    MovieModel.aggregate([{$group:{_id:"$director", nb_movies:{$sum:1}}}])
    .then((directors) => {
        res.json(directors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.post('/add', (req, res) => {
    const actor = req.body;
    const newDirector = DirectorModel(actor)
    newDirector.save()
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

    DirectorModel.updateOne({name:name}, actor).then(() => {
        res.send(`${name} updated`)
    }).catch((err) => {
        res.send('Unable to update actor : ' + err)
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name = req.params.name;

    DirectorModel.deleteOne({name:name}).then(() => {
        res.send(`${name} deleted`)
    }).catch((err) => {
        res.send('Unable to delete actor : ' + err)
    })
})


export default routes
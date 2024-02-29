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
    const name = req.params.filmname

    MovieModel.find({name:name},{_id:0, actors:1})
    .then((actors) => {
        res.json(actors[0].actors)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.get('/listcategory/:category', (req, res) => {
    const category = req.params.category

    MovieModel.aggregate([{$match:{categories:{$eq:category}}}])
    .then((movies) => {
        res.json(movies)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.get('/years/:year1/:year2', (req, res) => {
    const year1 = req.params.year1
    const year2 = req.params.year2

    MovieModel.find({year:{$gte:year1, $lte:year2}})
    .then((movies) => {
        res.json(movies)
    })
    .catch((err) => {
        res.sendStatus(510)
    })
})

routes.post('/add', (req, res) => {
    const actor = req.body;
    const newMovie = MovieModel(actor)
    newMovie.save()
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

    MovieModel.updateOne({name:name}, actor).then(() => {
        res.send(`${name} updated`)
    }).catch((err) => {
        res.send('Unable to update actor : ' + err)
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name = req.params.name;

    MovieModel.deleteOne({name:name}).then(() => {
        res.send(`${name} deleted`)
    }).catch((err) => {
        res.send('Unable to delete actor : ' + err)
    })
})



export default routes
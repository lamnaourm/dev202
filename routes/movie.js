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
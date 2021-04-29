// All the logic for backend

import express from 'express';
import mongoose from 'mongoose';
// import dbCards from './dbCards';
import Cards from "./dbCards.js";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:8Hi9TF6LlfNKYDbb@cluster0.lge3k.mongodb.net/tinderdb?retryWrites=true&w=majority`

//Middlewares


//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/tinder/card', (req, res) => {
    const dbCards = req.body;

    Cards.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
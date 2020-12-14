const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/posts')

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://raed:raed@cluster0.etney.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`App listening on port: ${PORT}`)
    }))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys_dev").mongoURI;
const users = require("./routes/api/users")
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const questions = require('./routes/api/questions');
const dataclasses = require('./routes/api/dataclasses');
const path = require('path');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.send("Hello a/A");
});

app.use("/api/users", users);
app.use("/api/questions", questions);
app.use("/api/dataclasses", dataclasses)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))


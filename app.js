const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');

//mongodb+srv://dev:gbzd69Wi9FIgyXhJ@cluster0.dt5ye.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());

app.get("/", (request, response) => {
    const user = new User({
        handle: 'JIM',
        email: 'jim@jim.jim',
        password: 'jimisgreat123'
    })
    user.save();
    response.send("Hello a/A");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
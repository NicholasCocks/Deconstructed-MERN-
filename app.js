const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const questions = require('./routes/api/questions');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
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
app.use("/api/questions", questions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
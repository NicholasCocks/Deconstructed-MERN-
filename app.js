const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")
const bodyParser = require('body-parser');
const questions = require('./routes/api/questions');
const dataclasses = require('./routes/api/dataclasses');
const tasks = require('./routes/api/tasks');
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
app.use("/api/dataclasses", dataclasses);
app.use("/api/tasks", tasks)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))


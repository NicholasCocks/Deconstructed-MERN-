const express = require('express');
const app = express();

//mongodb+srv://dev:gbzd69Wi9FIgyXhJ@cluster0.dt5ye.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get("/", (request, response) => {
    response.send("Hello a/A");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
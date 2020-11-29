const express = require('express');
const router = express.Router(); //router obj from router

router.get("/test", (req, res) => {
    res.json({ msg: "This is the tweet route" })
});

module.exports = router;
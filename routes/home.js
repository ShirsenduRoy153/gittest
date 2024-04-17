const express = require("express");
const router = express.Router();

router.get("/", async(req, res, next) => {
    res.render('abc.html', { title: 'Home' });
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
});

module.exports = router;
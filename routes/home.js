const express = require("express");
const router = express.Router();

const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

router.get("/", async(req, res, next) => {
    // return res.status(200).json({
    //     title: "Express Testing",
    //     message: "The app is working properly!",
    // });
    return res.render('index', { title: 'Home' });
});

module.exports = router;
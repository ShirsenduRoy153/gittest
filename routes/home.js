const express = require("express");
const exphbs = require('express-handlebars');
const app = express();

// Set Handlebars as the default view engine
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Set the path for views directory
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", async(req, res, next) => {
    res.render('index', {
        title: "Express Testing",
        message: "The app is working properly!"
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
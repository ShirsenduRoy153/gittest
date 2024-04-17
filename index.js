// Import packages
const express = require("express");
const IndexRouter = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", IndexRouter);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
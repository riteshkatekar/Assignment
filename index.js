const express = require("express");
const mongoose = require("mongoose");
const Assistant = require("./models/assistant.model.js");
const assistantRoute = require("./routes/assistant.route.js");
const app = express();
require('dotenv').config();

// port
const port = process.env.PORT || 5000 ;
const mongodb_url = process.env.MONGODB_URL;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "Welcome to the backend application with CRUD APIs for managing assistants"
  );
});

// Routes
app.use("/api/assistant", assistantRoute);

mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log("Connected to database!");
    // Start the server
    app.listen(port, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

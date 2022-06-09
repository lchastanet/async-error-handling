const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const { handleError } = require("./middlewares/errorHandler");

app.use("/user", userRoutes);

/**
 * Error handler
 * If an error occurs, it will be handled by the error handler middleware
 * else it will be passed to the next middleware
 */
app.use(handleError);

/**
 * Route for 404 error
 */
app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" });
});

module.exports = app;

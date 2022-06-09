const userDataAccess = require("../models/userDataAccess");

// asyncHandler is a middleware that handles errors
// It will be called if an error occurs in the async function
const asyncHandler = require("express-async-handler");

// This method is ugly, but it works 🤢
exports.getCallback = (req, res) => {
  const getResulte = (result) => {
    res.status(200).json(result);
  };

  userDataAccess.getAllCallback(getResulte);
};

// Aaaah, i like this one better
exports.getPromise = (req, res) => {
  userDataAccess.getAllPromise
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

// Oh, i have an exeption handler here
exports.getAsync = async (req, res) => {
  try {
    const users = await userDataAccess.getAllAsync();

    if (users) res.status(200).json(users);
    // Hello you !
    else throw new Error("User not fount");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Perfect!
exports.getAsyncErrorHandled = asyncHandler(async (req, res) => {
  const users = await userDataAccess.getAllAsync();

  if (users) res.status(200).json(users);
  else throw new Error("Something went terribly wrong...");
});

// Same, but not handled
exports.getAsyncErrorNotHandled = async (req, res) => {
  const users = await userDataAccess.getAllAsync();

  if (users) res.status(200).json(users);
  else throw new Error("Something went terribly wrong...");
};

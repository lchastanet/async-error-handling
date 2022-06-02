const userDataAccess = require("../models/userDataAccess")
const asyncHandler = require("express-async-handler")

exports.getCallback = (req, res) => {
  const getResulte = (result) => {
    res.status(200).json(result)
  }

  userDataAccess.getAllCallback(getResulte)
}

exports.getPromise = (req, res) => {
  userDataAccess.getAllPromise
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
}

exports.getAsync = async (req, res) => {
  try {
    const users = await userDataAccess.getAllAsync()

    if (users) res.status(200).json(users)
    else throw new Error("User not fount")
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getAsyncErrorHandled = asyncHandler(async (req, res) => {
  const users = await userDataAccess.getAllAsync()

  if (users) res.status(200).json(users)
  else throw new Error("Something went terribly wrong...")
})

exports.getAsyncErrorNotHandled = async (req, res) => {
  const users = await userDataAccess.getAllAsync()

  if (users) res.status(200).json(users)
  else throw new Error("Something went terribly wrong...")
}

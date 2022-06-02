const handleError = (err, req, res, next) => {
  if (err instanceof Error) res.status(500).send("Something broke!")
  else next()
}

module.exports = { handleError }

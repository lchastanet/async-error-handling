const express = require("express")

const userController = require("../controllers/userController")

const router = express.Router()

router.use("/getCallback", userController.getCallback)
router.use("/getPromise", userController.getPromise)
router.use("/getAsync", userController.getAsync)
router.use("/getAsyncErrorHandled", userController.getAsyncErrorHandled)
router.use("/getAsyncErrorNotHandled", userController.getAsyncErrorNotHandled)

module.exports = router

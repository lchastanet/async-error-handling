const users = require("../../data/users.json")

exports.getAllCallback = (callback) => {
  setTimeout(() => {
    callback(users)
  }, 300)
}

exports.getAllPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(users)
  }, 300)
  //throw new Error("BOOM")
  //reject(new Error("BOOM"))
}).catch((err) => {
  console.log(err.message)
})

exports.getAllAsync = async () => {
  return await new Promise((resolve, reject) => {
    //setTimeout(resolve(users), 300)
    //throw new Error("BOOM")
    reject(new Error("BOOM"))
  }).catch((err) => {
    console.log(err.message)
  })
}

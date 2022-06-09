const users = require("../../data/users.json");

// With callback
exports.getAllCallback = (callback) => {
  setTimeout(() => {
    callback(users);
  }, 300);
};

/**
 * With a promise
 * don't hesitate to uncomment the line below
 */
exports.getAllPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(users);
  }, 300);
  //throw new Error("BOOM 💣")
  //reject(new Error("BOOM 💣"))
}).catch((err) => {
  console.log(err.message);
});

/**
 * With an async function (and reject)
 * don't hesitate to uncomment the line below
 */
exports.getAllAsync = async () => {
  return await new Promise((resolve, reject) => {
    //setTimeout(resolve(users), 300)
    //throw new Error("BOOM 💣")
    reject(new Error("BOOM 💣"));
  }).catch((err) => {
    console.log(err.message);
  });
};

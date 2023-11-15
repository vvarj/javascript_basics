console.log("Start sync");

// const promiseTest = new Promise();

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task here
  setTimeout(function () {
    console.log("Async task 1 Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise 1 Done");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promse 2 done");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Tome", code: "BC100" });
  }, 1000);
});

promiseThree.then((data) => console.log("Promise 3 done Data:", data));

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = true;
    if (error) {
      reject("Some Error");
    } else {
      resolve({ name: "Four", code: "4PROMISE" });
    }
  }, 1000);
});

promiseFour
  .then((data) => console.log(data))
  .catch((error) => console.log("Error Promise 4 Occured:", error));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = true;
    if (error) {
      reject("Some Error");
    } else {
      resolve({ name: "Five Promise", code: "5PROMISE", message: "success" });
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("5th promise error occured E:", error);
  }
}

consumePromiseFive();

console.log("End sync");

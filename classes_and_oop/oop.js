const user = {
  username: "arjun",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details !!");
    // console.log(`username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// user.getUserDetails();
console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("tom", 12, true);
const userTwo = new User("Ajmal", 11, false);
// console.log(userOne);
// console.log(userTwo);

// Consturctor is just a reference
console.log(userOne.constructor);

//Instance of !!
console.log(userOne instanceof Object);
console.log(userOne instanceof User);

// NEW KEYWORD
// 1 .Whenever we use new keyword then new empty object is created - called instance
// 2 . Construction function is called because of new keyword , this will pack the arguments
// 3 The arugments is injected in the "this" keyword
// We will get that in functions or where ever we needed

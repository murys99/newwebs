// OBJECT ORIENTED JAVASCRIPT


// OBJECT LITERAL RECAP


// const userOne = {
//     username: 'ryu',
//     email: 'ryu@gmail.com',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// }

// console.log(userOne.email, userOne.username);   // ryu@gmail.com ryu
// userOne.login();  // the user logged in

// if we want to create another user np. userTwo, we need to write down everything as above, but change values - we are writing a lot the same code





// CLASS CONSTRUCTORS


// class User {
//     constructor(username, email){
//         // set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// console.log(userOne, userTwo);  // User {username: 'mario', email: 'mario@gmail.com'} User {username: 'luigi', email: 'luigi@gmail.com'}

// the 'new' keyword
// 1 - it creates a new empty object
// 2 - it binds the value 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object




// CLASS METHODS & METHOD CHAINING


// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//     }
//     // class methods
//     login(){
//         console.log(`${this.username} just logged in`);
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//     }
// }

// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// userOne.login();  // mario just logged in
// userTwo.logout();  // luigi just logged out

// method chaining
// we can chain methods only if we return this in methods
// example

// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     // class methods
//     login(){
//         console.log(`${this.username} just logged in`);
//         // it allows us to chain methods
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         // it allows us to chain methods
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         // it allows us to chain methods
//         return this;
//     }
// }

// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// method chaining:
// we CANT chain methods if we dont return this in class methods

// userOne.login().incScore().logout();

/*
mario just logged in
mario has a score of 1
mario just logged out
*/




// CLASS INHERITANCE (SUBCLASSES)


// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     // class methods
//     login(){
//         console.log(`${this.username} just logged in`);
//         // it allows us to chain methods
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         // it allows us to chain methods
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         // it allows us to chain methods
//         return this;
//     }
// }

//  inheritance example

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);
//     }
// }

// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// const userThree = new Admin('shaun', 'shaun@gmail.com')

// let users = [userOne, userTwo, userThree];

// console.log(users);  // (3) [User, User, Admin]

// userThree.deleteUser(userTwo);
// console.log(users);  // (2) [User, Admin]

// userOne.deleteUser(userThree);  // Uncaught TypeError: userOne.deleteUser is not a function - default user has no deleteUser() method




// SUPER()


// class User {
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     // class methods
//     login(){
//         console.log(`${this.username} just logged in`);
//         // it allows us to chain methods
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         // it allows us to chain methods
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         // it allows us to chain methods
//         return this;
//     }
// }

// inheritance example

// class Admin extends User {
//     constructor(username, email, title){
//         super(username, email);  // super odnosi się do inheritance - User, który ma już te parametry w swoim construktorze
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);
//     }
// }

// let users = [userOne, userTwo, userThree];

// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// const userThree = new Admin('shaun', 'shaun@gmail.com', 'black-belt-ninja');




// CONSTRUCTORS (UNDER THE HOOD)

// constructor functions
// to jest przykład jak tworzono kod identyczny do class, zanim je wprowadzono:

// function User(username, email){
//     this.username = username;
//     this.email = email;
//     // method example, but there is better way to insert methods and its via prototype, example is below
//     this.login = function(){
//         console.log(`${this.username} has logged in`);
//     };
// }


// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// console.log(userOne, userTwo);  //  User {username: 'mario', email: 'mario@gmail.com'} User {username: 'luigi', email: 'luigi@gmail.com'}

// userOne.login();  // mario has logged in

// the 'new' keyword
// 1 - it creates a new empty object
// 2 - it binds the value 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object



// PROTOTYPE MODEL


// prototypes - every object in JavaScript has a prototype
// prototypes contain all the methods for that object type

// example:
// Date Object has a prototype of getDay(), getMonth() etc
// Array Object has a prototype of sort(), filter() etc


// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function (){
//     console.log(`${this.username} has logged in`);
//     // after adding return this; we can chain methods
//     return this;
// };
// User.prototype.logout = function (){
//     console.log(`${this.username} has logged out`);
//     // after adding return this; we can chain methods
//     return this;
// };


// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// console.log(userOne, userTwo);  // both has a login method in prototype 

// userOne.login();  // mario has logged in
// userTwo.logout();  // luigi has logged out

// userOne.login().logout();  // mario has logged in  mario has logged out




// PROTOTYPAL INHERITANCE


// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function (){
//     console.log(`${this.username} has logged in`);
//     // after adding return this; we can chain methods
//     return this;
// };
// User.prototype.logout = function (){
//     console.log(`${this.username} has logged out`);
//     // after adding return this; we can chain methods
//     return this;
// };


// function Admin(username, email, title){
//     User.call(this, username, email);
//     this.title = title;
// }

// prototypal inheritance 

// Admin.prototype = Object.create(User.prototype);  // inheriting methods/prototypes from User

// adding new prototype
// Admin.prototype.deleteUser = function (){
    // detele user
// };


// const userOne = new User('mario', 'mario@gmail.com');
// const userTwo = new User('luigi', 'luigi@gmail.com');

// const userThree = new Admin('shaun', 'shaun@gmail.com', 'black-belt-ninja');

// console.log(userThree);  //  Admin {username: 'shaun', email: 'shaun@gmail.com', title: 'black-belt-ninja'}


[{
  id: '23fdgos9',
  name: 'Lily',
  room: 'Office 1'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    // var users = this.users.filter(user => user.id === id);
    // this.users.splice(this.users.indexOf(users[0]), 1); // does not work: see below
    // [][0] -> undefined
    // ['lily', 'lucy'].indexOf(undefined) -> -1
    // ['lily', 'lucy'].splice(-1, 1) -> [ 'lucy' ]
    // see test case

    // return users[0];

    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map(user => user.name);

    return namesArray;
  }

}

module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Lucy', 16);
// var description = me.getUserDescription();
// console.log(description);

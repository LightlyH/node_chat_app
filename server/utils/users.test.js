const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Ron',
      room: 'Office 1'
    }, {
      id: '2',
      name: 'Ines',
      room: 'Office 2'
    }, {
      id: '3',
      name: 'Ted',
      room: 'Office 1'
    }];

  });


  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1',
      name: 'Lucy',
      room: 'Office 1'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Office 1', () => {
    var userList = users.getUserList('Office 1');

    expect(userList).toEqual(['Ron', 'Ted']);
  });

  it('should return names for Office 2', () => {
    var userList = users.getUserList('Office 2');

    expect(userList).toEqual(['Ines']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    // console.log(users.users);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
    // // console.log(user); // undefined
    // console.log(users.users); // 每一个test都是彼此独立的!!!
    // [ { id: '1', name: 'Ron', room: 'Office 1' }, { id: '2', name: 'Ines', room: 'Office 2' } ]
    // Ted is removed! (because of splice())
    // expect(users.users.length).toBe(2);
  });

  it('should find user', () => {
    var userId = '3';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '45';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

});

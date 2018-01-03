const expect = require('chai').expect;
const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Alex',
            room: 'React Course'
        }, {
            id: '3',
            name: 'John',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Alex',
            room: 'Room'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).to.eql([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        
        expect(userList).to.eql(['Mike', 'John']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).to.eql(['Alex']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).to.equal(userId);
        expect(users.users.length).to.equal(2);
    });

    it('should not remove user', () => {
        var userId = '4';
        var user = users.removeUser(userId);
        expect(user).to.be.an('undefined');
        expect(users.users.length).to.equal(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).to.equal(userId);
    });

    it('should not find user', () => {
        var getUser = users.getUser('4');
        expect(getUser).to.be.an('undefined');
    });
});

Meteor.startup(function() {
if (Meteor.users.find().count() === 0) {
  	// User 1
    Accounts.createUser({
      username: 'User1',
      email: 'User1@example.com',
      password: 'password'
    });
    // User 2
    Accounts.createUser({
      username: 'User2',
      email: 'User2@example.com',
      password: 'password'
    });
    // User 3
    Accounts.createUser({
      username: 'User3',
      email: 'User3@example.com',
      password: 'password'
    });
    // User 4
    Accounts.createUser({
      username: 'User4',
      email: 'User4@example.com',
      password: 'password'
    });
    // User 5
    Accounts.createUser({
      username: 'User5',
      email: 'User5@example.com',
      password: 'password'
    });
    // User 6
    Accounts.createUser({
      username: 'User6',
      email: 'User6@example.com',
      password: 'password'
    });
    // User 7
    Accounts.createUser({
      username: 'User7',
      email: 'User7@example.com',
      password: 'password'
    });
    // User 8
    Accounts.createUser({
      username: 'User8',
      email: 'User8@example.com',
      password: 'password'
    });
    // User 9
    Accounts.createUser({
      username: 'User9',
      email: 'User9@example.com',
      password: 'password'
    });
    // User 9
    Accounts.createUser({
      username: 'User10',
      email: 'User10@example.com',
      password: 'password'
    });
	}
});
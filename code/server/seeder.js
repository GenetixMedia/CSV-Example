Meteor.startup(function() {
if (Meteor.users.find().count() === 0) {
  	// Super User
    Accounts.createUser({
      username: 'Super User',
      email: 'Super@user.com',
      password: 'password',
      profile: {
      	yearCreated: 2015,
      	monthCreated: 1,
      }
    });
    console.log("Super User Created");

  	// User 1
    Accounts.createUser({
      username: 'User1',
      email: 'User1@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2015,
      	monthCreated: 3,
      }
    });
    console.log("User 1 Created");

    // User 2
    Accounts.createUser({
      username: 'User2',
      email: 'User2@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2015,
      	monthCreated: 5,
      }
    });
    console.log("User 2 Created");

    // User 3
    Accounts.createUser({
      username: 'User3',
      email: 'User3@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2015,
      	monthCreated: 7,
      }
    });
    console.log("User 3 Created");

    // User 4
    Accounts.createUser({
      username: 'User4',
      email: 'User4@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2015,
      	monthCreated: 12,
      }
    });
    console.log("User 4 Created");

    // User 5
    Accounts.createUser({
      username: 'User5',
      email: 'User5@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 1,
      }
    });
    console.log("User 5 Created");

    // User 6
    Accounts.createUser({
      username: 'User6',
      email: 'User6@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 3,
      }
    });
    console.log("User 6 Created");

    // User 7
    Accounts.createUser({
      username: 'User7',
      email: 'User7@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 5,
      }
    });
    console.log("User 7 Created");

    // User 8
    Accounts.createUser({
      username: 'User8',
      email: 'User8@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 7,
      }
    });
    console.log("User 8 Created");

    // User 9
    Accounts.createUser({
      username: 'User9',
      email: 'User9@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 8,
      }
    });
    console.log("User 9 Created");

    // User 9
    Accounts.createUser({
      username: 'User10',
      email: 'User10@example.com',
      password: 'password',
      profile: {
      	yearCreated: 2016,
      	monthCreated: 10,
      }
    });
    console.log("User 10 Created");

    console.log("User Database Seeded! Now get to work! :)");
    console.log("   ");
    console.log("Be sure to set the Admin1 Id in your Roles.js file");
    console.log("(/server/Roles.js) with the Meteor.userId() for Super User.");
    console.log("This is how you enable the Admin Role for super@user.com");

}

});








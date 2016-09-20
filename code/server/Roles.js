Meteor.startup(function () {
  const AdminsId = {
  	Admin1: "kdCAj3PxFaJxRaNJF", // Meteor.userId() for super@user.com
  };

  Roles.addUsersToRoles(AdminsId.Admin1, ['Super-Admin']);

});

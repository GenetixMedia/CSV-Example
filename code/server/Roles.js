Meteor.startup(function () {
  const AdminsId = {
  	// replace this string with the Meteor.userId() for super@user.com
  	// once loged in as Super User, "super@user.com" 
  	// a simple Meteor.userId(); in the browser console with retrieve the Id
  	Admin1: "dNn4aPCvp7yvZTwAj", 
  };

  Roles.addUsersToRoles(AdminsId.Admin1, ['Super-Admin']);

});

Meteor.startup(function () {
  const AdminsId = {
  	Admin1: "KfExu5heRGih3ZSbP", // Meteor.userId() for super@user.com
  };

  Roles.addUsersToRoles(AdminsId.Admin1, ['Super-Admin']);

});

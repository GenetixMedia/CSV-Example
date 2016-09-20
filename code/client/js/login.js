Template.login.rendered = function(){

}

Template.login.events({
	"submit .form-signin": function(event){
		var email = event.target.email.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(email, password, function(err){
			if(err){
				event.target.email.value = email;
				event.target.password.value = password;
				Bert.alert(err.reason, "danger", 'growl-top-right');
			} else {
				Router.go('/dashboard');
				Bert.alert("You are now logged in", "success", 'growl-top-right');
			}
		});

		// Prevent Submit
		return false;
	}
});
Template.signup.rendered = function() {
	
}

Template.signup.events({
	"submit .form-signup": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var password2 = trimInput(event.target.password2.value);

		if(isNotEmpty(email) && 
			isNotEmpty(password) &&
			isEmail(email) && 
			areValidPasswords(password, password2)){

			Accounts.createUser({
				email: email,
				password: password,
				profile: {
					yearCreated: new Date().getFullYear(),
      				monthCreated: new Date().getMonth() + 1, // since Jan is 0, we need to Add 1, making december 12
				}
			}, function(err){
				if(err){
					
					Bert.alert("There was an error with registration", "danger", 'growl-top-right');
				} else {
					Bert.alert("Account Created! You are now logged in", "success", 'growl-top-right');
					Router.go('/dashboard');
					
				}
			});
		}

		// Prevent Submit
		return false;
	}
});


// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
}

// Check For Empty Fields
isNotEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    Bert.alert("Please fill in all fields", "danger", 'growl-top-right');
    return false;
};

// Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    Bert.alert("Please use a valid email address", "danger", 'growl-top-right');
    return false;
};

// Check Password Field
isValidPassword = function(password) {
    if (password.length < 6) {
        Bert.alert("Password must be at least 6 characters", "danger", 'growl-top-right');
        return false;
    }
    return true;
};

// Match Password
areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
        return false;
    }
    if (password !== confirm) {
        Bert.alert("Passwors do not match", "danger", 'growl-top-right');
        return false;
    }
    return true;
};
if (Meteor.isServer) {
	Meteor.publish("User", function() {
	    //returns undefined if not logged in so check if logged in first
	    if(this.userId) {
	        var user = Meteor.users.find();
	        //var user is the same info as would be given in Meteor.user();
	    }
	});
}
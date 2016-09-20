Template.export.rendered = function() {

}

Template.export.helpers({
	
});

Template.export.events({
	"click .export": function(){

		Meteor.call('export', function(error, result){
			if(error){
				console.log('Error');
			}else{
				console.log("Result");
				Session.set('data', result); // make data reactive

				var newData = Session.get('data'); // grab result in a variable

				var link = document.createElement("a"); // create a link
				link.setAttribute("href", newData); // set the atribute to the data string
				link.setAttribute("download", "App_Users_Export.csv");
				
				link.click();
				
			}
		});


				


	},


});
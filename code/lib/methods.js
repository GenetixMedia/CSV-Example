if (Meteor.isServer) {

  // Meteor Methods
  Meteor.methods({

    export: function() {

      var fileData = "";

      var records = Meteor.users.find().fetch()

      // build a CSV string. Oversimplified. You'd have to escape quotes and commas.
      records.forEach(function(rec) {
        fileData += 
        "User Name" + "," + 
        "Email" + "," + 
        "Year Created" + "," + 
        "Month Created" + "\r\n" + 
        rec.username.toString() + "," + 
        rec.emails[0].address.toString() + "," + 
        rec.profile.yearCreated.toString() + "," + 
        rec.profile.monthCreated.toString() + 
        "\r\n" + "\r\n";
      });

      // Data URI
      csvData = 'data:application/csv;charset=utf-8,' + 
      encodeURIComponent(fileData);
      
      return csvData;

    }

  });

}
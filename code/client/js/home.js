Template.home.rendered = function(){
	$(document).ready(function() {
	  $('#particles').particleground({
	    dotColor: 'rgba(204, 230, 255, .2)',
	    lineColor: 'rgba(204, 230, 255, .0)'
	  });
	  $('.intro').css({
	    'margin-top': -($('.intro').height() / 2)
	  });
	});

  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();
}

Template.home.helpers({

});

Template.home.events({

});
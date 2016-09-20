Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Home
	this.route('home', {
		path: '/',
		template: 'home'
	});
});
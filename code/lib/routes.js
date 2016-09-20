Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Home
	this.route('home', {
		path: '/',
		template: 'home'
	});
	// Login
	this.route('login', {
		path: '/login',
		template: 'login'
	});
	// Login
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});
	// Dashbaord
	this.route('dashboard', {
		path: '/dashboard',
		template: 'dashboard'
	});
});
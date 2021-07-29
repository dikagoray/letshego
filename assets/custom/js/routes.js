 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/screens/splash.html'
	},
	{
		path: '/walkthrough',
		componentUrl: './partials/screens/walkthrough.html'
	},
	{
		path: '/home',
		componentUrl: './partials/screens/home.html'
	},
	{
		path: '/themes',
		componentUrl: './partials/themes.html'
	},
	{
		path: '/more',
		componentUrl: './partials/more.html'
	},
	{
		path: '(.*)',
		componentUrl: './partials/screens/404.html'
	}
];
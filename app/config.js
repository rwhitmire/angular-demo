app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/cards.html',
		controller: 'StoryCardController',
		resolve: {
			viewType: function() { return 'list'; }
		}
	});

	$routeProvider.when('/grid', {
		templateUrl: 'app/views/cards.html',
		controller: 'StoryCardController',
		resolve: {
			viewType: function() { return 'grid'; }
		}
	});
}]);

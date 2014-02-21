app.controller('StoryCardController', [

	'$scope', 
	'StoryCardService',
	'viewType',

function($scope, storyCardService, viewType){

	$scope.formVisible = false;
	$scope.viewType = viewType;
	$scope.cards = [];

	storyCardService.getAll(function(cards){
		$scope.cards = cards || [];
	});

	$scope.showForm = function() {
		$scope.formVisible = true;
	};

	$scope.hideForm = function() {
		$scope.formVisible = false;
	};

	$scope.addCard = function() {
		$scope.cards.push($scope.form);
		storyCardService.saveCards($scope.cards, function(){
			console.log('done saving.');
		});
	};

}]);
app.controller('StoryCardController', [

	'$scope', 
	'StoryCardService',
	'viewType',

function($scope, storyCardService, viewType){

	$scope.formVisible = false;
	$scope.viewType = viewType;
	$scope.cards = [];

	$scope.showForm = function() {
		$scope.formVisible = true;
	};

	$scope.hideForm = function() {
		$scope.formVisible = false;
		$scope.form = {};
	};

	$scope.loadCards = function(callback) {
		storyCardService.getAll(function(cards){
			$scope.cards = cards;
			if(callback) callback();
		});
	};

	$scope.save = function() {
		storyCardService.upsert($scope.form, function() {
			$scope.loadCards(function(){
				$scope.hideForm();
			});
		});
	};

	$scope.edit = function(card) {
		$scope.form = {id: card.id, points: card.points, description: card.description};
		$scope.showForm();
	};

	$scope.remove = function(card) {
		storyCardService.remove(card, function(){
			$scope.loadCards();
		});
	};

	$scope.loadCards();

}]);
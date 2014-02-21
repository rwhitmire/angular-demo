app.service('StoryCardService', [function(){
	var self = this;

	self.getAll = function(callback) {
		var json = localStorage.getItem('cards');
		callback(JSON.parse(json));
	};

	self.saveCards = function(cards, callback) {
		var list = [];

		cards.forEach(function(card){
			list.push({id: card.id, points: card.points, description: card.description});
		});

		var json = JSON.stringify(list);
		localStorage.setItem('cards', json);

		callback();
	};

}]);
app.service('StoryCardService', [function(){
	var self = this;

	self.getAll = function(callback) {
		var json = localStorage.getItem('cards');
		if(callback) callback(JSON.parse(json) || []);
	};

	self.upsert = function(card, callback) {
		if(!card.id) insert(card, callback);
		else update(card, callback);
	};

	self.remove = function(card, callback) {
		self.getAll(function(cards) {
			var index = cards.indexOf(card);
			cards.splice(index, 1);
			saveCards(cards);
			if(callback) callback();
		});
	};

	function insert(card, callback) {
		self.getAll(function (cards){
			card.id = getNextId(cards);
			cards.push(card);
			saveCards(cards, callback);
		});
	}

	function update(card, callback) {
		self.getAll(function(cards) {
			var index = -1;

			cards.forEach(function(item, i){
				if(item.id == card.id){
					index = i;
					return;
				}
			});

			cards[index] = card;
			saveCards(cards, callback);
		});
	}

	function getNextId(cards) {
		if(cards.length === 0) return 1;
		var last = cards[cards.length - 1];
		return last.id + 1;
	}

	function saveCards(cards, callback) {
		var list = [];

		cards.forEach(function(card){
			list.push({id: card.id, points: card.points, description: card.description});
		});

		var json = JSON.stringify(list);
		localStorage.setItem('cards', json);

		if(callback) callback();
	}

}]);
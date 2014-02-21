describe('story card controller', function() {

    var $scope, storyCardService;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, StoryCardService) {
        $scope = $rootScope.$new();
        storyCardService = StoryCardService;

        $controller('StoryCardController', {
            $scope: $scope,
            viewType: 'list',
            storyCardService: storyCardService
        });
    }));

    describe('show form', function(){
        it('should set form visible flag to true', function(done) {
            $scope.showForm();
            expect($scope.formVisible).toBe(true);
        });
    });

    describe('hide form', function(){
        it('should set form visible flag to false', function(done) {
            $scope.hideForm();
            expect($scope.formVisible).toBe(false);
        });
    });

    describe('add card', function() {
        it('should add card to cards collection', function(){
            $scope.cards = [];
            $scope.form = {};
            $scope.addCard();

            expect($scope.cards.length).toBe(1);
        });

        it('should call save cards on story card service', function(done) {
            spyOn(storyCardService, 'saveCards');
            $scope.addCard();
            expect(storyCardService.saveCards).toHaveBeenCalled();
        });
    });
});
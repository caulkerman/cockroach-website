app.controller("roachInfoCtrl", function($scope, mainService, roachData) {
	
	$scope.info = mainService.getRoach();
});
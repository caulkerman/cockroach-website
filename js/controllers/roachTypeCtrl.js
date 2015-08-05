app.controller("roachTypeCtrl", function($scope, $location, mainService) {
	
	$scope.roachType = mainService.roachData;
	
	$scope.roachClick = function(i) {
		$location.path("/type/" + mainService.roachData[i].urlName);
		mainService.setIndex(i);
	}
	
})
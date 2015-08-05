app.directive("myAboutInfo", function(mainService) {
	return {
		restrict: "EA",
		templateUrl: "html-Templates/aboutInfoTempl.html",
		link: function(scope, element, attrs) {
			var aboutInfo = mainService.about[i];
		}
	}


});
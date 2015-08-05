app.directive("myCssdirective", function() {
	return { 
      
      templateUrl: 'js/services_and_directives/cssDirective.html',
      restrict: 'E',
      scope: {
        myContent: '@myContent',
        myClass: '@myClass',
        otherContent: "@otherContent"
      },
      link: function (scope, elem, attrs) {
        console.log('This is the myTag directive');
      }
    };
	
})

var app = angular.module("roachApp", ['ngRoute']);
app.config(function($routeProvider) {
"use strict";
$routeProvider
	
	.when("/type", {
		templateUrl: "./html-Templates/roach_type.html",
		controller: "roachTypeCtrl"
	})

	.when("/type/:urlName", {
		templateUrl: "./html-Templates/roach_info.html",
		controller: "roachInfoCtrl",
		resolve: {
			roachData: function($route, mainService){
				return mainService.getRoachData();
			}
		}
	})

	.otherwise("/", {
		redirectTo: "html-Templates/roach_type.html"
	})


});
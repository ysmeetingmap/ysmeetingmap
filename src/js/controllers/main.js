/*
 *   @name Основная директива родитель страницы, разворачивается из Стейта app.js
 */
hotelApp
	.directive('ysMain', [function() {
		return {
			restrict: 'A',
			scope: {},
			link: function(scope, element, attr) {	

				
			},
			templateUrl: '../../main.html'
		}
	}]);

/*
 *   @name Основная директива родитель страницы, разворачивается из Стейта app.js
 */
hotelApp
	.directive('ysMain', [function() {
		return {
			restrict: 'A',
			scope: {},
			link: function(scope, element, attr) {	
				var loadMaps = setInterval(function() {
					if (typeof ymaps === "object" && typeof ymaps.Map === "function" && element.find("#map")) {
						var map = new ymaps.Map("map", {
				            center: [55.76, 37.64], 
				            zoom: 7
				        });
				        clearInterval(loadMaps);
					}
				}, 1000);
				
			},
			templateUrl: '../../main.html'
		}
	}]);

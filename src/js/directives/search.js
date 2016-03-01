hotelApp
	.directive('ysSearch', [function() {
		return {
			restrict: 'A',
			scope: {},
			link: function(scope, elem, attr) {	
				scope.mapInit = false;
			},
			templateUrl: '../search.html'
		}
	}]);

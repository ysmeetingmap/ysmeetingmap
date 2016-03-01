hotelApp
	.directive('ysPreloader', [function() {
		return {
			restrict: 'A',
			scope: {
				flag: "="
			},
			link: function(scope, elem, attr) {	
				scope.leftPosition = ($(elem).prev().width() / 2) - 24;

				scope.topPosition = ($(elem).prev().height() / 2) - 24;
			},
			templateUrl: '../preloader.html'
		}
	}]);

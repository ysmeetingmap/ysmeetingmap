hotelApp
	.directive('ysUserPanel', ['srvcInited', function(srvcInited) {
		return {
			restrict: 'A',
			scope: {
				mapInit: "="
			},
			link: function(scope, elem, attr) {	
				
			},
			templateUrl: '../userPanel.html'
		}
	}]);

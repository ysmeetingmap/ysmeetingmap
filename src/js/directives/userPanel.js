hotelApp
	.directive('ysUserPanel', ['srvcInited', 'ysApi', function(srvcInited, ysApi) {
		return {
			restrict: 'A',
			scope: {
				mapInit: "=",
				mapEditor: "="
			},
			link: function(scope, elem, attr) {	
				ysApi.get("panel.json").then(function(res) {
					if (res.data.data && angular.isArray(res.data.data) && res.data.data.length) {
						scope.menu = res.data.data;
						console.log(scope.menu);
					}


				}, function() {

				});


				scope.changeMapState = function() {
					scope.mapEditor = !scope.mapEditor;
				}
			},
			templateUrl: '../userPanel.html'
		}
	}]);

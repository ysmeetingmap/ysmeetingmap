hotelApp
	.directive('ysSearch', [function() {
		return {
			restrict: 'A',
			scope: {},
			link: function(scope, elem, attr) {	
				scope.mapInit = false; // инициализация карты + команда другим директивам о прогрузке
				scope.mapEditor = false; // активность клика на карты
			},
			templateUrl: '../search.html'
		}
	}]);

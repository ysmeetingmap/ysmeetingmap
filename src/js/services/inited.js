hotelApp
	.factory('srvcInited', [function() {
		var map;
		return {
			setData: function(data) {
				map = data;
			},
			getData: function() {
				return map;
			}
		}
	}]);

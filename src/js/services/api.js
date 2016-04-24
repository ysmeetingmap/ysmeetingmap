hotelApp
    .factory('ysApi', ['$http', function($http) {
        return {
            get: function(api) {
                return $http({
                    method : "GET",
                    url : api
                });
            }
        }
    }]);

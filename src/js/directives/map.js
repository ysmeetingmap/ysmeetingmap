hotelApp
	.directive('ysMap', ['srvcInited', '$rootScope', '$state', function(srvcInited, $rootScope, $state) {
		return {
			restrict: 'A',
			scope: {
				mapInit: "=",
				mapEditor: "="
			},
			link: function(scope, elem, attr) {	
				var map;

				scope.$on('$stateChangeSuccess', function() {
					console.log('url changed');
				});

				if (!$rootScope.mapInit) {
					$rootScope.mapInit = true;
					var mapScr = document.createElement("script");
					mapScr.type = "text/javascript";
					mapScr.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
					
					document.getElementsByTagName("body")[0].appendChild(mapScr);	
					
					var loadMaps = setInterval(function() {
						if (typeof ymaps === "object" && typeof ymaps.Map === "function") {
							var map = new ymaps.Map("map", {
					            center: [44.95719, 34.11079], 
					            zoom: 15
					        });
					        
					        scope.mapInit = true;
					        scope.$apply();

					        map.events.add('click', function (e) {
							    // Получение координат щелчка
								if (scope.mapEditor) {
									var coords = e.get('coords');
									console.log(coords);

									var myPlacemark = new ymaps.Placemark([coords[0], coords[1]], {}, {
										iconLayout: 'default#image',
										iconImageHref: '../img/baloon24.png',
										iconImageSize: [24, 24],
										iconImageOffset: [-12, -12]
									});
									map.geoObjects.add(myPlacemark);
								}
							});

					        var myPlacemark = new ymaps.Placemark([44.95719, 34.11079], {}, {
						        iconLayout: 'default#image',
						        iconImageHref: '../img/baloon24.png',
						        iconImageSize: [24, 24],
						        iconImageOffset: [0, 0]
						    });
						    map.geoObjects.add(myPlacemark);
					        
					        /*ymaps.geolocation.get().then(function (res) {
						        var $container = document.getElementById("map"),
							        bounds = res.geoObjects.get(0).properties.get('boundedBy'),
							        mapState = ymaps.util.bounds.getCenterAndZoom(
							            bounds,
							            [$container.width(), $container.height()]
							        );
							        map = new ymaps.Map('map', mapState);
							}, function (e) {
							    console.log(e);
							});*/

					        
					        clearInterval(loadMaps);
						}
					}, 1000);	
				}
			},
			templateUrl: '../../map.html'
		}
	}]);

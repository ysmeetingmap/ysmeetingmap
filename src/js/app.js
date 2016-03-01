/*
 *   @name Конфигурация приложения.
 *   Настройка роутинга.
 */
'use strict';
var hotelApp = angular.module('hotel', [
	'ui.router'
	]);

	hotelApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}])
	.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
		//	$urlMatcherFactoryProvider.strictMode(false);
			//$locationProvider.html5Mode(true);
			//$locationProvider.hashPrefix('!');


			/*$urlMatcherFactoryProvider.type('keyVal', {}, function() {
				return {
					encode: function(str) {
						return str;
					},
					decode: function(value, key) {
						return value;
					},
					is: angular.isString,
					equals: function(a, b) {
						return a == b;
					}
				};
			});*/

			$urlRouterProvider
				.when('', '/main') //main
				.when('/', '/main')
				.otherwise('/main');

			$stateProvider
				.state('main', {
					url: '/main',
					views: {
						'@': {
							template: '<div data-ys-main=""></div>'
						}
					}
				})
				.state('search', {
					url: '/search',
					views: {
						'@': {
							template: '<div data-ys-search=""></div>'
						}
					}
				})

		}]);

(function() {
	"use strict";

	angular.module("MenuApp")
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home.html'
			})
			.state('categories', {
				url: '/categories',
				templateUrl: 'categories.view.html',
				controller: 'CategoriesController as catiesCtrl',
				resolve: {
					menuCaties: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();					
				}]}
			})
			.state('items', {
				url: '/category-items/{category}',
				templateUrl: 'items.view.html',
				controller: 'ItemsController as itemsCtrl',
				resolve: {
					items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
						return MenuDataService.getItemsForCategory($stateParams.category);
					}]
				}
			});

		$urlRouterProvider.otherwise('/home');
	}
})();
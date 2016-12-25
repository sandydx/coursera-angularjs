(function() {
	"use strict";

	angular.module('data')
	.constant('RestaurantUrl', 'https://davids-restaurant.herokuapp.com')
	.service('MenuDataService', ['$http','RestaurantUrl', function($http, RestaurantUrl) {
		var service = this;

		service.getAllCategories = function () {
			return $http({
				method: 'GET',
				url: (RestaurantUrl + '/categories.json')
			}).then(function (response) {
				return response.data;
			});
		};

		service.getItemsForCategory = function (categoryShortName) {
			return $http({
				method: 'GET',
				url: (RestaurantUrl + '/menu_items.json?category=' + categoryShortName)
			}).then(function (response) {
				return response.data;
			});
		};

	}]);
})();
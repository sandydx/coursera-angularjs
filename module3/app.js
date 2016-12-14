(function() {
	"use strict";

	angular.module("NarrowItDownApp", [])
	.controller("NarrowItDownController", NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItems)
	.constant('MenuServiceUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.searchTermInput = "";
		ctrl.foundNothing = false;
		ctrl.found = [];

		ctrl.narrowDown = function () {
			ctrl.foundNothing = (ctrl.searchTermInput === "");

			if (!ctrl.foundNothing) {
				var foundPromise = MenuSearchService.getMatchedMenuItems(ctrl.searchTermInput);
				foundPromise.then(function(data) {
					ctrl.found = data;
					ctrl.foundNothing |= (ctrl.found.length === 0);				
				});
			}
						
			console.log(ctrl.found);
		}

		ctrl.onRemove = function(index) {
			ctrl.found.splice(index, 1);
		}
	}

	MenuSearchService.$inject = ['$http', 'MenuServiceUrl'];
	function MenuSearchService($http, MenuServiceUrl) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: 'GET',
				url: MenuServiceUrl
			}).then(function (response) {
				var foundItems = [];
				var allItems = response.data.menu_items;
				for (var i = 0; i < allItems.length; i++) {
					if (allItems[i].description.indexOf(searchTerm) !== -1)
						foundItems.push(allItems[i]);
				}
				
				return foundItems;
			});
		};
	}

	function foundItems() {
		var ddo = {
			templateUrl: 'founditems.html',
			scope: {
				foundNothing: '<',
				items: '<',
				onRemove: '&'
			}
		};

		return ddo;
	}

})();
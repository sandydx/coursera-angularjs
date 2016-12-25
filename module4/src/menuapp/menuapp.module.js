(function(){
	"use strict";

	angular.module('MenuApp', ['data', 'ui.router'])
	.controller('MenuController', MenuController);

	MenuController.$inject = ['MenuDataService'];
	function MenuController(MenuDataService) {
		var menuCtrl = this;

		var catiesPromise = MenuDataService.getAllCategories();
		catiesPromise.then(function (categories) {
			menuCtrl.caties = categories;
			console.log("category: " + menuCtrl.caties[0].short_name);
			var catItemPromise = MenuDataService.getItemsForCategory(menuCtrl.caties[0].short_name);
			catItemPromise.then(function (categoryItems) {
				menuCtrl.lunchItems = categoryItems;
			});
		});
		
	}

})();
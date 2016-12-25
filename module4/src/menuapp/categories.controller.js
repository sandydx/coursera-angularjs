(function () {
	"use strict";

	angular.module("MenuApp")
	.controller("CategoriesController", CategoriesController);

	CategoriesController.$inject = ['menuCaties'];
	function CategoriesController(menuCaties) {
		var catiesCtrl = this;
		catiesCtrl.menuCaties = menuCaties;
	}
	
})();
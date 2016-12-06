(function(){
	"use strict";

	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService) {
		var toButCtrl = this;
		toButCtrl.toBuyList = ShoppingListCheckOffService.getToBuy();

		toButCtrl.boughtItem = function(item) {
			ShoppingListCheckOffService.boughtItem(item);
			//console.log("bought clicked:" + item.name);
		}
	}

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtCtrl = this;
		alreadyBoughtCtrl.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBought();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyList = [
			{name : "cookies", quantity : "10"},
			{name : "kanelbullar", quantity : "10"},
			{name : "milk", quantity : "2"},
			{name : "kaffe", quantity : "2"},
			{name : "beer", quantity : "5"},
			{name : "diaper", quantity : "100"}
		];

		var alreadyBoughtList = [];

		service.getToBuy = function () {
			return toBuyList;
		}

		service.getAlreadyBought = function () {
			return alreadyBoughtList;
		}

		service.boughtItem = function(item) {
			var index = toBuyList.indexOf(item);
			toBuyList.splice(index, 1);
			alreadyBoughtList.push(item);
		}
	}

})();
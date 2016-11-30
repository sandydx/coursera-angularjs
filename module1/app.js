(function () {
	"use strict";

	angular.module("LunchChecker", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope) {
		$scope.lunchinput = "";
		$scope.message = "";

		$scope.check = function () {
			var message = "";
			if ($scope.lunchinput.length === 0) {
				message = "Please enter data first";
			} else {
				message = "Enjoy!";
				var items = $scope.lunchinput.split(",");
				if (items.length > 3)
					message = "Too much!";
			}
						
			$scope.message = message;
		}
	}

})();
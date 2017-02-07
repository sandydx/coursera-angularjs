(function() {
"use strict";
angular.module("public")
.controller("MyinfoController", MyinfoController);

MyinfoController.$inject = ['RegisterService'];
function MyinfoController(RegisterService) {
	var myinfoCtrl = this;

	myinfoCtrl.me = RegisterService.getUser();
}

})();
(function() {
	"use strict";

	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ['RegisterService', 'ServerDomain'];
	function SignupController(RegisterService, ServerDomain) {
		var signupCtrl = this;
		signupCtrl.dishExist = true;
		signupCtrl.signSuccess = false;

		signupCtrl.registerUser = function () {
			var promise = RegisterService.getDishByShortname(signupCtrl.favdishSn);
			promise.then(function(response) {
				console.log("dish response:", response);
				//call saveUser
				var favdish = {
					shortName: signupCtrl.favdishSn,
					name: response.data.name,
					description: response.data.description,
					imageUrl: (ServerDomain + '/images/' + signupCtrl.favdishSn + '.jpg')
				};

				RegisterService.saveUser(signupCtrl.firstName, signupCtrl.lastName,
					signupCtrl.email, signupCtrl.phone, favdish);
				signupCtrl.signSuccess = true;
			}, function(error) {
				signupCtrl.dishExist = false;
			});
		};
	}

})();


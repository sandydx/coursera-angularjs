(function () {
"use strict";

angular.module('public')
.service('RegisterService', RegisterService)
.constant('ServerDomain', "http://sandydx.herokuapp.com");

RegisterService.$inject = ['$http', 'ServerDomain'];
function RegisterService($http, ServerDomain) {
  var service = this;
  
  service.getDishByShortname = function (shortName) {
  	return $http({
  		method: 'GET',
  		url: (ServerDomain + "/menu_items/" + shortName + ".json")
  		});
  	}

  var user = null;

  service.getUser = function() {
  	return user;
  }

  service.saveUser = function (firstName, lastName, email, phone, favdish) {
  	user = {
  		firstName: firstName,
	  	lastName: lastName,
  		email: email,
  		phone: phone,
  		favdish: favdish
  	};
  	console.log("user: ", user);
  }

}

})();

(function (){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService']

  function AuthController ($location, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;

    function register (user){
      // will log the user in
      return authService.register(user)
        .then(function (){
          vm.login(user);
        })
        .then(function(){
          return authService.sendWelcomeEmail(user.email);
        })
        .catch(function (error){
          vm.error = error;
        });
    }

    function login(user){
      return authService.login(user)
        .then(function(loggedInUser){
          $location.path('/waitList');
        })
        .catch(function(error){
          vm.error = error;
        });
    }

  }


})();

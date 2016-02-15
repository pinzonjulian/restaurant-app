(function (){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService']

  function AuthController ($location, authService) {
    var vm = this;

    var user = {
      email: '',
      password: ''
    }

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    function register (user){
      // will log the user in
      return authService.register(user)
        .then(function (){
          vm.login(user);
        })
        .catch(function (error){
          console.log(error);
        });
    }

    function login(user){
      return authService.login(user)
        .then(function(loggedInUser){
          console.log(loggedInUser)
        })
        .catch(function(error){
          console.log(error)
        });
    }

    function logout(){
      authService.logout()
      // Redirect to '/' $location is a angular service.
      $location.path('/');
    }
  }


})();

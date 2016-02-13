(function (){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', '$firebaseAuth']

  function AuthController ($location, $firebaseAuth) {
    var vm = this;
    var firebaseReference = new Firebase('https://jperestaurantapp.firebaseio.com/');
    var firebaseAuthObject = $firebaseAuth(firebaseReference);

    var user = {
      email: '',
      password: ''
    }

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    function register (user){
      // will log the user in
      return firebaseAuthObject.$createUser(user)
        .then(function (){
          vm.login(user);
        })
        .catch(function (error){
          console.log(error);
        });
    }

    function login(user){
      return firebaseAuthObject.$authWithPassword(user)
        .then(function(loggedInUser){
          console.log(loggedInUser)
        })
        .catch(function(error){
          console.log(error)
        });
    }

    function logout(){
      firebaseAuthObject.$unauth();
      // Redirect to '/' $location is a angular service.
      $location.path('/');
    }
  }


})();

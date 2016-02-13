(function (){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth']

  function AuthController ($firebaseAuth) {
    var vm = this;
    var firebaseReference = new Firebase('https://jperestaurantapp.firebaseio.com/');
    var firebaseAuthObject = $firebaseAuth(firebaseReference);

    var user = {
      email: '',
      password: ''
    }

    vm.register = register;

    function register (user){
      // will log the user in
      return firebaseAuthObject.$createUser(user);
    }

  }


})();

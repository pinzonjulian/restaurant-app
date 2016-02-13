(function (){
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth']

  function AuthController ($firebaseAuth) {
    var vm = this;

    vm.register = register;

    function register (user){
      // will log the user in
    }

  }


})();

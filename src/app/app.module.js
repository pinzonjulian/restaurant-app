(function (){
  'use strict'

  angular
    .module('app', [
      // Angular Modules
      'ngRoute',

      // Third party modules
      'firebase',

      // Custom Modules
      'app.auth',
      'app.core',
      'app.landing',
      'app.layout',
      'app.waitList'
    ])
    .config(configFunction)

  configFunction.$inject = [ '$routeProvider' ]

  function configFunction($routeProvider) {
    $routeProvider.otherwise({
      redirectTo : '/'
    })
  }

})();

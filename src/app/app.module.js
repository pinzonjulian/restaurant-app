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
    .run(runFunction);

  configFunction.$inject = [ '$routeProvider' ]

  function configFunction($routeProvider) {
    $routeProvider.otherwise({
      redirectTo : '/'
    })
  }

  runFunction.$inject = [ '$rootScope', '$location' ]

  function runFunction($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error){
      if(error === 'AUTH_REQUIRED'){
        $location.path('/')
        console.log('AUTH_REQUIRED error')
      }
    })
  }

})();

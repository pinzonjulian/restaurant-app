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
      'app.waitList'
    ]);

})();

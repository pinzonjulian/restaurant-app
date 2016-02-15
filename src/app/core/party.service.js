(function (){
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService)

  function partyService () {
    // a .factory service creator returns an object. 
    var service = {};
    return service;
  }

})();
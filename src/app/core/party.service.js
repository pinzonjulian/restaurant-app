(function (){
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService)

  partyService.$inject = ['$firebaseArray', 'firebaseDataService']

  function partyService ($firebaseArray, firebaseDataService ) {
    // a .factory service creator returns an object. 
    var service = {
      Party : Party,
      parties: $firebaseArray(firebaseDataService.root)
    };

    return service;


    //=====================
    function Party () {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
    }

  }

})();
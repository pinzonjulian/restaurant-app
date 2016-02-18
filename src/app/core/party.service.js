(function (){
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService)

  partyService.$inject = ['$firebaseArray', 'firebaseDataService']

  function partyService ($firebaseArray, firebaseDataService ) {

    var parties = null;

    // a .factory service creator returns an object.
    var service = {
      Party : Party,
      getPartiesByUser: getPartiesByUser,
      reset : reset
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

    function getPartiesByUser(uid) {
      if(!parties){
        parties = $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
      }
      return parties;
    }

    function reset() {
      // Break the connection established by $firebaseArray
      if (parties){
        parties.$destroy();
        parties = null;
      }
    }

  }

})();

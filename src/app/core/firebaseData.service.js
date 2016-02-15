(function (){
  'use strict';

  angular


    firebaseDataService.$inject('FIREBASE_URL')

  function firebaseDataService(FIREBASE_URL) {
    var root = new Firebase(FIREBASE_URL)
    var service = {
      root: root;

    }
    return service;



  }

})();
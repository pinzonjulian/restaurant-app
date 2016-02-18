(function (){
  'use strict'

  angular
    .module('app.waitList')
    .directive('gzPartyForm', gzPartyForm)

  function gzPartyForm() {
    return {
      templateUrl: 'app/waitList/directives/partyForm.html',
      restrict: 'E',
      controller : PartyFormController,
      controllerAs: 'vm',
      scope : {}
    };
  }

  PartyFormController.$inject = [ 'partyService' ];

  function PartyFormController(partyService) {
    var vm = this;

    vm.newParty = new partyService.Party();
    vm.addParty = addParty;

    function addParty() {
      // Need way to access vm.parties
      // vm.parties.$add(vm.newParty);
      vm.newParty = new partyService.Party();
    }

  }

})();

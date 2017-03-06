(function(){
  'use strict';

  angular.module('app').component('search', {
    controller: controller,
    templateUrl: '/js/search/search.template.html'
  })

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.$onInit = onInit;
    vm.submitSearch = submitSearch;

    function onInit() {
    }

    function submitSearch(search) {
      $state.go('searchResults', {'job': search.job, 'location': search.location});
    }
  }
}())

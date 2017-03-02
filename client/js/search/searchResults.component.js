(function(){
  'use strict';

  angular.module('app').component('searchResults', {
    controller: controller,
    templateUrl: '/js/search/searchResults.template.html'
  });

  controller.$inject = ['$http', '$stateParams'];


  function controller($http, $stateParams) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
      console.log('searchService params: ', $stateParams)
       return  $http({
         method:'GET',
         url: '/indeed',
         params: {
           job: $stateParams.job,
           location: $stateParams.location,
         }
       })
       .then((response) => {
         return vm.searchResults = response.data.results;
       })
       .catch((err) => {
         console.log(err);
       });
    }
  }
}())

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
    vm.addJob = addJob;

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

    function addJob(url) {
      return $http({
        metho: 'GET',
        url: '/indeed/new',
        params: {
          url: url
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}())

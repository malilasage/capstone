(function(){
  'use strict';

  angular.module('app').component('searchResults', {
    controller: controller,
    templateUrl: '/js/search/searchResults.template.html'
  });

  controller.$inject = ['$http', '$stateParams', '$state'];


  function controller($http, $stateParams, $state) {
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
        method: 'GET',
        url: `/indeed/new`,
        params: {
          url: url
        }
      })
      .then((res) => {
        // console.log(res);
        // $state.go('jobList');
        return res;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}())

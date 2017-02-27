(function(){
  'use strict';

  angular.module('app')
    .service('$jobService', function($http) {

      this.getJobs = function getJobs(userId) {
        return $http({
           method:'GET',
           url: `/jobs/${userId}`
        }).then((data, err) => {
          if(err) { throw err }
          console.log(data);
        })
      }
    })
}())

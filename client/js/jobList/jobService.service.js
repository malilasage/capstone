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
          return data.data;
        })
      };

      this.getJob = function getJob(jobId) {
        console.log(jobId)
        return $http({
           method:'GET',
           url: `/jobs/job/${jobId}`
        }).then((data, err) => {
          if(err) { throw err }
          return data.data;
        })
      }
    })
}())

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
        return $http({
           method:'GET',
           url: `/jobs/job/${jobId}`
        }).then((data, err) => {
          if(err) { throw err }
          return data.data;
        })
      }

      this.postJob = function postJob(job, userId) {
        $http.post(`/jobs/${userId}`, job).then((data, err) => {
          if(err) { throw err; }
          console.log(data);
          return data.data;
        })
      }

      this.getGlassdoor = function getGlassdoor(company) {
        return $http({
          method:'GET',
          url: '/glassdoor',
          params: {
            company: company
          }
        })
        .then((data, err) => {
          if(err) { throw err; }
          if((data.data.response.employers.length === 0) || (data.data.response.employers[0].exactMatch !== true))  {
            return null;
          }
          else {
            return data.data.response.employers[0];
          }
        })
      }

    })
}())

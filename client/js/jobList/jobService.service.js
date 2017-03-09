(function(){
  'use strict';

  angular.module('app')
    .service('$jobService', function($http) {
      this.getJobs = function getJobs() {
        return $http({
           method:'GET',
           url: `/jobs`
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

      this.postJob = function postJob(job) {
        return $http.post(`/jobs`, job).then((data, err) => {
          if(err) { throw err; }
          return data.data;
        })
      }

      this.deleteJob = function deleteJob(job) {
        $http.delete(`/jobs/${job._id}`).then((data, err) => {
          if(err) {throw err}
          console.log(data);
          return data.data;
        })
      }

      this.updateJobTasks = function(jobId, task) {
        $http.patch(`/jobs/${jobId}`, task).then((data, err) => {
          if(err) {throw err}
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

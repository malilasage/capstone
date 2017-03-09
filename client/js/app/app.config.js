(function(){
  'use strict';

  angular.module('app').config(config);
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        component: 'app',
        // abstract: 'true',
        url: '/'
      })
      .state({
        name: 'landing',
        parent: 'app',
        component:'landing',
        url: 'landing'
      })
      .state({
        name: 'jobList',
        component: 'jobList',
        parent: 'app',
        url: 'my-jobs',
        resolve: {
          jobs: function($jobService) {
            return $jobService.getJobs();
          },
          user: function($userService) {
            return $userService.getUser();
          }
        }
      })
      .state({
        name: 'jobView',
        component: 'jobView',
        parent: 'app',
        url: 'job/:company/:jobId',
        resolve: {
          job: function($jobService, $transition$, $stateParams) {
            // return $jobService.getJob($transition$.params().jobId);
            return $jobService.getJob($stateParams.jobId);
          },
          glassdoor: function($jobService, $stateParams) {
            return $jobService.getGlassdoor($stateParams.company);
          }
        }
      })
      .state({
        name: 'profile',
        component: 'profile',
        parent: 'app',
        url: 'profile',
        resolve: {
          user: function($userService) {
            return $userService.getUser();
          }
        }
      })
      .state({
        name: 'search',
        component: 'search',
        parent: 'app',
        url: 'search'
      })
      .state({
        name: 'searchResults',
        component: 'searchResults',
        parent: 'search',
        url: '/search-results/:job/:location',
        resolve: {
          results: function($stateParams) {
            console.log($stateParams);
            return $stateParams;
          }
        }
      })
      .state({
        name: 'about',
        component: 'about',
        parent: 'app',
        url: 'about'
      })
  }
}())

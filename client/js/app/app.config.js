(function(){
  'use strict';

  angular.module('app').config(config);
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app'
      })
      .state({
        name: 'landing',
        parent: 'app',
        component:'landing',
        url: '/'
      })
      .state({
        name: 'jobList',
        component: 'jobList',
        parent: 'app',
        url: '/jobs',
        resolve: {
          jobs: function($jobService) {
            var userId = "58b0ab4eff75c44a8ca38abc";
            return $jobService.getJobs(userId);
          }
        }
      })
      .state({
        name: 'jobView',
        component: 'jobView',
        parent: 'app',
        url: '/jobs/:jobId',
        resolve: {
          job: function($jobService, $transition$) {
            return $jobService.getJob($transition$.params().jobId);
          }
        }
      })
      .state({
        name: 'profile',
        component: 'profile',
        parent: 'app',
        url: '/profile',
        resolve: {
          user: function($userService) {
            var userId = "58b0ab4eff75c44a8ca38abc";
            return $userService.getUser(userId);
          }
        }
      })
      .state({
        name: 'search',
        component: 'search',
        parent: 'app',
        url: '/search'
      })
      .state({
        name: 'about',
        component: 'about',
        parent: 'app',
        url: '/about'
      })
  }
}())

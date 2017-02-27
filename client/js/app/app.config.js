(function(){
  'use strict';

  angular.module('app').config(config);
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        // abstract: true,
        component: 'app',
        url: '/'
      })
      .state({
        name: 'jobList',
        component: 'jobList',
        url: '/jobs'
      })
  }
}())

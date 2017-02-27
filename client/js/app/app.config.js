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
        // resolve: {
        //   jobs: function
        // }
      })
      .state({
        name: 'jobView',
        component: 'jobView',
        parent: 'app',
        url: '/jobview'
      })
      .state({
        name: 'profile',
        component: 'profile',
        parent: 'app',
        url: '/profile'
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

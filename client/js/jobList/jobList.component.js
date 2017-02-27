(function(){
  'use strict';

  angular.module('app').component('jobList', {
    controller: controller,
    templateUrl: '/js/jobList/jobList.template.html'
  })
  function controller() {

    this.$onInit = onInit;

    function onInit() {
    }
  }
}());

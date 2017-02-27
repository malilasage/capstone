(function(){
  'use strict';

  angular.module('app').component('jobList', {
    controller: controller,
    templateUrl: '/js/jobList/jobList.template.html',
    require: {
      layout: '^app'
    }
  })
  function controller() {

    this.$onInit = onInit;

    function onInit() {
    }
  }
}());

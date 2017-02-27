(function(){
  'use strict';

  angular.module('app').component('jobView', {
    controller: controller,
    templateUrl: '/js/jobView/jobView.template.html',
    bindings: {
      job: '<'
    }
  })

  controller.$inject = ['$jobService'];

  function controller($jobService) {

    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
    }
  }
}());

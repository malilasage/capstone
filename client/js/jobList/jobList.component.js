(function(){
  'use strict';

  angular.module('app').component('jobList', {
    controller: controller,
    templateUrl: '/js/jobList/jobList.template.html',
    bindings: {
      jobs: '<'
    },
    require: {
      layout: '^app'
    }
  })

  controller.$inject = ['$jobService'];

  function controller($jobService) {

    const vm = this;

    vm.$onInit = onInit;
    vm.openModal = openModal;
    vm.popUpOpen = popUpOpen;

    function onInit() {

    }

    function openModal() {

    }

    function popUpOpen(id) {
      console.log(id);
      //is showing on all elements. make func(job.resumeStatus || job.clStatus) n try that?
      // console.log(id);
      // console.log();
      vm.popUp = !vm.popUp;
    }
  }
}());

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
    vm.toggleModal = toggleModal;
    vm.createJob = createJob;
    vm.toggleDropdown = toggleDropdown;
    vm.togglePopup = togglePopup;

    function onInit() {

    }

    function toggleModal() {
      vm.openModal = !vm.openModal;
    }

    function createJob() {
      var userId = "58bdff1f25bb5530295c308b";
      $jobService.postJob(vm.newJob, userId);
      vm.jobs.push(vm.newJob);
      vm.newJob = {};
      toggleModal();
    }

    function togglePopup() {
      // console.log(vm.jobData);
      console.log('click');
      vm.showPopup = !vm.showPopup;
    }

    function toggleDropdown() {
      vm.caret = !vm.caret;
    }

  }
}());

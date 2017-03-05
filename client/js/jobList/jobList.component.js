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
    vm.popUpOpen = popUpOpen;
    vm.toggleDropdown = toggleDropdown;
    vm.togglePopup = togglePopup;

    function onInit() {

    }

    function toggleModal() {
      vm.openModal = !vm.openModal;
    }

    function createJob() {
      var userId = "58b0ab4eff75c44a8ca38abc";
      $jobService.postJob(vm.newJob, userId);
      toggleModal();
    }

    function popUpOpen(id) {
      console.log(id);
      //is showing on all elements. make func(job.resumeStatus || job.clStatus) n try that?
      // console.log(id);
      // console.log();
      vm.popUp = !vm.popUp;
    }

    function togglePopup() {
      vm.showPopup = !vm.showPopup;
    }

    function toggleDropdown() {
      vm.caret = !vm.caret;
    }

  }
}());

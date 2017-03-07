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
    vm.updateTask = updateTask;

    vm.taskIcons = {
      write: ["fa-minus", "fa-pencil", "fa-check"],
      schedule: ["fa-minus", "fa-calendar-check-o", "fa-check"]
    };

    function onInit() {

    }

    function toggleModal() {
      vm.openModal = !vm.openModal;
    }

    function createJob() {
      var userId = "58b0ab4eff75c44a8ca38abc";
      $jobService.postJob(vm.newJob, userId);
      vm.jobs.push(vm.newJob);
      vm.newJob = {};
      toggleModal();
    }

    function toggleDropdown() {
      vm.caret = !vm.caret;
    }

    function updateTask(task, job) {
      console.log(task, job.title);
      job.tasks.coverLetterStatus = task;
    }
  }
}());

(function(){
  'use strict';

  angular.module('app').component('jobView', {
    controller: controller,
    templateUrl: '/js/jobView/jobView.template.html',
    bindings: {
      job: '<',
      glassdoor: '<'
    }
  })

  controller.$inject = ['$jobService', '$http', '$state', '$sce'];

  function controller($jobService, $http, $state, $sce) {

    const vm = this;

    vm.$onInit = onInit;
    vm.toggleEditNotes = toggleEditNotes;
    vm.submitNotes = submitNotes;
    vm.deleteJob = deleteJob;
    vm.updateTask = updateTask;
    vm.goosehire = goosehire;

    vm.taskIcons = {
      write: ["fa-minus", "fa-pencil", "fa-check"],
      schedule: ["fa-minus", "fa-calendar-check-o", "fa-check"]
    };

    function onInit() {
      $sce.trustAsHtml(vm.job.description);
      console.log(vm.job.url);
    }

    function goosehire(url) {
      
    }

    function toggleEditNotes() {
      vm.newNotes = vm.job.notes;
      vm.showEditNotes = !vm.showEditNotes;
    }

    function submitNotes(notes, job) {
      var newInfo = {};
      newInfo.notes = notes;
      $jobService.updateJobTasks(job._id, newInfo);
      vm.job.notes = notes;
      toggleEditNotes();
    }

    function deleteJob(job) {
      console.log(job);
      $jobService.deleteJob(job);
      $state.go('jobList');
    }

    function updateTask(task, job, type) {
      if(type === 'interview') {
        var newTask = { tasks: { interview: {}}};
        newTask.tasks.interview.status = task;
        job.tasks.interview.status = task;
      }
      else {
        var newTask = { tasks:{}};
        newTask.tasks[type] = task;
        job.tasks[type] = task;
      }
      $jobService.updateJobTasks(job._id, newTask);
    }
  }
}());

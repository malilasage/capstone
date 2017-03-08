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
    vm.confetti = confetti;

    vm.taskIcons = {
      write: ["fa-minus", "fa-pencil", "fa-check"],
      schedule: ["fa-minus", "fa-calendar-check-o", "fa-check"]
    };

    // $scope.$watch(function(){
    //   return $jobService.postJob()
    // }, function(newVal, oldVal) {
    //   vm.jobs.push(newVal);
    // });

    function onInit() {

    }

    function toggleModal() {
      vm.openModal = !vm.openModal;
    }

    function createJob() {
      var userId = "58b0ab4eff75c44a8ca38abc";
      $jobService.postJob(vm.newJob, userId).then((data) => {
        vm.jobs.push(data);
        vm.newJob = {};
        toggleModal();
      });
    }

    function toggleDropdown() {
      vm.caret = !vm.caret;
    }

    function updateTask(task, job, type) {
      var userId = "58b0ab4eff75c44a8ca38abc";
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
      $jobService.updateJobTasks(job._id, userId, newTask);
    }

    function confetti() {

    }
  }
}());

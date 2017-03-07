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

  controller.$inject = ['$jobService', '$http', '$state'];

  function controller($jobService, $http, $state) {

    const vm = this;

    vm.$onInit = onInit;
    vm.toggleEditNotes = toggleEditNotes;
    vm.submitNotes = submitNotes;
    vm.deleteJob = deleteJob;

    function onInit() {

    }

    function toggleEditNotes() {
      vm.newNotes = vm.job.notes;
      vm.showEditNotes = !vm.showEditNotes;
    }

    function submitNotes(notes) {
      toggleEditNotes();
      // $http.patch('', notes).then((err, data) =>{
      //   vm.job.notes = notes;
      //   toggleEditNotes();
      // })
      vm.job.notes = notes;
      console.log(notes);
    }

    function deleteJob(job) {
      console.log(job);
      var userId = "58b0ab4eff75c44a8ca38abc";
      $jobService.deleteJob(userId, job);
      $state.go('jobList');
    }
  }
}());

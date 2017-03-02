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

  controller.$inject = ['$jobService', '$http'];

  function controller($jobService, $http) {

    const vm = this;

    vm.$onInit = onInit;
    vm.toggleEditNotes = toggleEditNotes;
    vm.submitNotes = submitNotes;

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
  }
}());

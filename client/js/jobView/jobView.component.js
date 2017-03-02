(function(){
  'use strict';

  angular.module('app').component('jobView', {
    controller: controller,
    templateUrl: '/js/jobView/jobView.template.html',
    bindings: {
      job: '<'
    }
  })

  controller.$inject = ['$jobService', '$http'];

  function controller($jobService, $http) {

    const vm = this;

    vm.$onInit = onInit;
    vm.toggleEditNotes = toggleEditNotes;
    vm.submitNotes = submitNotes;

    function onInit() {
      vm.glassdoor = 'data'
      // $http.get(`http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=128556&t.k=kjwbHdKegvO&action=employers&q=${vm.job.company}&userip=208.184.3.194&useragent=Mozilla/%2F4.0`).then((res) => {
      //   console.log(res);
      // })
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

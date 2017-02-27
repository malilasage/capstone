(function(){
  'use strict';

  angular.module('app').component('jobList', {
    controller: controller,
    templateUrl: '/js/jobList/jobList.template.html',
    require: {
      layout: '^app'
    }
  })

  controller.$inject = ['$jobService'];

  function controller($jobService) {

    this.$onInit = $jobService.getJobs("58b0ab4eff75c44a8ca38abc");

    // function onInit() {
    //
    // }
  }
}());

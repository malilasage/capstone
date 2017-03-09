(function(){
  'use strict';

  angular.module('app').component('profile', {
    controller: controller,
    templateUrl: '/js/profile/profile.template.html',
    bindings: {
      user: '<'
    }
  })

  controller.$inject = ['$userService', '$http'];

  function controller($userService, $http) {

    const vm = this;

    vm.$onInit = onInit;
    vm.updateTaskColumns = updateTaskColums;
    vm.setGoal = setGoal;

    function onInit() {
    }

    function updateTaskColums() {
      console.log(vm.columns);
      $http.patch('/user', vm.columns).then((res) => {
        console.log(res);
      })
    }

    function setGoal() {
      $http.patch('/goals', vm.new).then((res) => {
        console.log(res);
        console.log('goal set');
      })
    }
  }
}())

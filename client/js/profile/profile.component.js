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
      console.log('lol bitch u better fix this');
    }

    function setGoal() {
      console.log(vm.new);
      $http.patch('/goals', vm.new).then((res) => {
        console.log(res);
      })
    }
  }
}())

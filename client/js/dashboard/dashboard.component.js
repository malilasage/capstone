(function(){
  'use strict';

  angular.module('app').component('dashboard', {
    controller: controller,
    templateUrl: '/js/dashboard/dashboard.template.html',
    bindings: {
      jobData: '<'
    }
  })

  controller.$inject = ['$jobService'];

  function controller($jobService) {

    const vm = this;

    vm.$onInit = onInit;

    function onInit() {
      var data1 = [0, 0];
      for (var i = 0; i < vm.jobData.length; i++) {
        if(vm.jobData[i].tasks.resumeStatus === 'fa-check') {
          data1[0] += 1;
        }
        else {
          data1[1] += 1;
        }
      }
      initCharts(data1);
      initCounter(vm.jobData.length);
    }
  }

  function initCharts(data1) {
    var c1 = document.getElementById('chart1');
    var c2 = document.getElementById('chart2');
    // var c3 = document.getElementById('chart3');

    var chart1 = new Chart(c1, {
      type: 'pie',
      data: {
        labels: [
          "Applied",
          "Not Finished"
        ],
        datasets: [{
          data: data1,
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
      }
    });

    var chart2 = new Chart(c2, {
      type: 'pie',
      data: {
        labels: [
          "Applied",
          "Not Finished"
        ],
        datasets: [{
          data: data1,
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
      }
    })

  }

  function initCounter(num) {
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    var duration = num < 8 ? 3 : 2.5;
    var dashboardCounter = new CountUp("dashboardCounter", 0, num, 0, duration, options);
    dashboardCounter.start();
  }

}());

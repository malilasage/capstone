(function(){
  'use strict';

  angular.module('app').component('jobList', {
    controller: controller,
    templateUrl: '/js/jobList/jobList.template.html',
    bindings: {
      jobs: '<',
      user: '<'
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
      var data1 = [0, 0];
      for (var i = 0; i < vm.jobs.length; i++) {
        if(vm.jobs[i].tasks.resumeStatus === 'fa-check') {
          data1[0] += 1;
        }
        else {
          data1[1] += 1;
        }
      }
      initCharts(data1);
      initCounter(vm.jobs.length);
    }

    function toggleModal() {
      vm.openModal = !vm.openModal;
    }

    function createJob() {
      $jobService.postJob(vm.newJob).then((data) => {
        vm.jobs.push(data);
        vm.newJob = {};
        toggleModal();
      });
    }

    function toggleDropdown() {
      vm.caret = !vm.caret;
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

}());

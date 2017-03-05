(function() {
  'use strict';

  angular.module('app').directive('popup', function() {
    // return {
    //   restrict: 'E',
    //   transclude: true,
    //   scope: {
    //     show: '='
    //   },
    //   link: function(scope, ele, attrs) {
    //     // ele.on('mouseenter', function() {
    //     //   ele.css('color', 'red');
    //     //   // console.log(attrs);
    //     //   // console.log(scope, ele);
    //     //   // console.log(ele[0].children[0])
    //     // })
    //     // ele.on('mouseleave', function() {
    //     //   ele.css('color', 'black');
    //     // })
    //     console.log('now')
    //    scope.dialogStyle = {};
    //    if (attrs.width) {
    //     scope.dialogStyle.width = attrs.width;
    //   }
    //   if (attrs.height) {
    //     scope.dialogStyle.height = attrs.height;
    //   }
    //   scope.hideModal = function() {
    //     scope.show = false;
    //   };
    //   },
    //   template: `
    //     <div ng-show="show">
    //       <div class="ng-modal-overlay">
    //         <span>popup</span>
    //       </div>
    //       <script> console.log('template') </script>
    //     </div>
    //   `
    // }
 return {
    restrict: 'E',
    scope: {
      show: '=',
      jobData: '=jobData'
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      // console.log(element[0].nextElementSibling.className);
      // console.log(element, scope, attrs);
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
      scope.sJobData = scope.jobData;
      console.log(scope.sJobData);
      console.log(scope.sJobData.title);
      // scope.popupData = {
      //   current: element[0].nextElementSibling.className
      //
      // };
      // scope.job.current = 'suh dude';
      // scope.job.options = []
    },
    template:` <div class='ng-modal' ng-show='show'>
      <div class='ng-modal-overlay' ng-click='$ctrl.hideModal()'></div>
      <div class='ng-modal-dialog' ng-style='dialogStyle' ng-model="sJobData">
      cool {{ sJobData.title }}
        <div class='ng-modal-close' ng-click='$ctrl.hideModal()'>X</div>
        <div class='ng-modal-dialog-content' ng-transclude></div>
      </div></div>`
  };
  })
}())

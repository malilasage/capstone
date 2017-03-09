(function(){
  'use strict';

  angular.module('app')
    .service('$userService', function($http) {
      this.getUser = function getUser() {
        return $http({
           method:'GET',
           url: `/user/getuser`
        }).then((data, err) => {
          if(err) { throw err }
          return data.data;
        })
      };
    })
}())

(function(){
  'use strict';

  angular.module('app')
    .service('$userService', function($http) {
      this.getUser = function getUser(userId) {
        return $http({
           method:'GET',
           url: `/user/${userId}`
        }).then((data, err) => {
          if(err) { throw err }
          return data.data;
        })
      };
    })
}())

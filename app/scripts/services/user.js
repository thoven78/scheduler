'use strict';

angular.module('schedulerApp')
  .factory('user', function () {

    return {
      query: function () {
        return angular.fromJson(localStorage.getItem('users')) || [];
      },
      
      save: function(user) {
        localStorage.setItem('users', angular.toJson(user));
      }
    };
  });

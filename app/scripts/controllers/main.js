'use strict';

angular.module('schedulerApp')
  .controller('MainCtrl', function ($scope, user) {
    $scope.users = user.query();
    var counter = ($scope.users.length || 0);
    
    /**
     * Adds a new user
     */
    $scope.addUser = function() {
    
      if ($scope.userForm.$valid) {
        var currentUser = {
          id: ($scope.userId || counter++),
          firstname: $scope.firstname,
          lastname: $scope.lastname,
          email: $scope.email,
          isBusy: false
        };

        // if this user already exist just update its values 
        if ($scope.users[currentUser.id]) {
          $scope.users[currentUser.id] = currentUser;
        } else {
          $scope.users.push(currentUser);
        }
        user.save($scope.users); // save the users to localStorage
        clearForm(); // clear the form
      } else {
        $scope.userForm.submitted = true;
      }
    };
    
    /**
     * Responsible to populate the form 
     * @param user {object} the user you want to edit  
     */
    $scope.editUser = function(user) {
      $scope.firstname = user.firstname;
      $scope.lastname = user.lastname;
      $scope.email = user.email;
      $scope.userId = user.id;
    };
    
    $scope.resetForm = function() {
      clearForm();
    };
    
    /**
     * private function to clear the form 
     */
    var clearForm = function() {
      $scope.firstname = '';
      $scope.lastname = '';
      $scope.email = '';
    };
  });

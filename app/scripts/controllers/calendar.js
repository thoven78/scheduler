'use strict';

angular.module('schedulerApp')
  .controller('CalendarCtrl', function ($scope, user) {
    $scope.users = user.query();
    $scope.header = [
      'Time',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thur',
      'Fri',
      'Sat'
    ];
    $scope.data = {
      '10:00 AM': [
        {
          text: '10:00',
          userIds: []
        },
        {
          text: '10:15',
          userIds: []
        },
        {
          text: '10:30',
          userIds: []
        },
        {
          text: '10:45',
          userIds: []
        }
      ],
      '11:00 AM': [
        {
          text: '11:00',
          userIds: []
        },
        {
          text: '11:15',
          userIds: []
        },
        {
          text: '11:30',
          userIds: []
        },
        {
          text: '11:45',
          userIds: []
        }
      ],
      '12:00 PM': [
        {
          text: '12:00',
          userIds: []
        },
        {
          text: '12:15',
          userIds: []
        },
        {
          text: '12:30',
          userIds: []
        },
        {
          text: '12:45',
          userIds: []
        }
      ],
      '1:00 PM':  [
        {
          text: '1:00',
          userIds: []
        },
        {
          text: '1:15',
          userIds: []
        },
        {
          text: '1:30',
          userIds: []
        },
        {
          text: '1:45',
          userIds: []
        }
      ],
      '2:00 PM':  [
        {
          text: '2:00',
          userIds: []
        },
        {
          text: '2:15',
          userIds: []
        },
        {
          text: '2:30',
          userIds: []
        },
        {
          text: '2:45',
          userIds: []
        }
      ],
      '3:00 PM':  [
        {
          text: '3:00',
          userIds: []
        },
        {
          text: '3:15',
          userIds: []
        },
        {
          text: '3:30',
          userIds: []
        },
        {
          text: '3:45',
          userIds: []
        }
      ],
      '4:00 PM': [
        {
          text: '4:00',
          userIds: []
        },
        {
          text: '4:15',
          userIds: []
        },
        {
          text: '4:30',
          userIds: []
        },
        {
          text: '4:45',
          userIds: []
        }
      ],
      '5:00 PM':  [
        {
          text: '5:00',
          userIds: []
        },
        {
          text: '5:15',
          userIds: []
        },
        {
          text: '5:30',
          userIds: []
        },
        {
          text: '5:45',
          userIds: []
        }
      ]
    };
    
    $scope.selectUser = function(user) {
      $scope.activeUser = user;
    };
    
    $scope.toggleAvailability = function(item, hour, index) {
      var userId = $scope.activeUser.id;

      if (!item.active && !inArray(item.userIds, userId)) {

        $scope.data[hour][index]['userIds'].push(userId);
        $scope.users[userId].isBusy = true;
        $scope.data[hour][index]['active'] = userId;
      } else {
      
        $scope.data[hour][index]['userIds'].splice(item.userIds.indexOf(userId), 1);
        $scope.users[userId].isBusy = false;
        $scope.data[hour][index]['active'] = '';
      }
    };
    
    var inArray = function(haystack, id) {
      return haystack.indexOf(id) !== -1;
    };
  });

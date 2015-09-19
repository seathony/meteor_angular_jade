angular.module('simple-todos-angular').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
 function($urlRouterProvider, $stateProvider, $locationProvider){

   $locationProvider.html5Mode(true);

   $stateProvider
     .state('tasks', {
       url: '/tasks',
       templateUrl: 'client/tasks/views/tasks-list.html',
       controller: 'TasksListCtrl'
     })
     .state('taskDetails', {
       url: '/tasks/:taskId',
       templateUrl: 'client/tasks/views/task-details.html',
       controller: 'TaskDetailsCtrl'
     });

   $urlRouterProvider.otherwise("/tasks");
 }]);

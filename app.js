Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  angular.module('simple-todos-angular', ['angular-meteor', 'ui.router']);

  angular.module('simple-todos-angular').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
   function($urlRouterProvider, $stateProvider, $locationProvider){

     $locationProvider.html5Mode(true);

     $stateProvider
       .state('tasks', {
         url: '/tasks',
         templateUrl: 'tasks-list.html',
         controller: 'TasksListCtrl'
       })
       .state('taskDetails', {
         url: '/tasks/:taskId',
         templateUrl: 'task-details.html',
         controller: 'TaskDetailsCtrl'
       });

     $urlRouterProvider.otherwise("/tasks");
   }]);

    angular.module('simple-todos-angular').controller('TasksListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

    $scope.tasks = $meteor.collection(Tasks, false);

    $scope.remove = function(task){
      $scope.tasks.remove(task);
    };

    $scope.removeAll= function(){
      $scope.tasks.remove();
    };
  }]);

  angular.module("simple-todos-angular").controller("TaskDetailsCtrl", ['$scope', '$stateParams',
   function($scope, $stateParams){
     $scope.taskId = $stateParams.taskId;
   }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Tasks.find().count() === 0) {
      var tasks = [
        {'name': 'Laundry',
          'description': 'Pickup at northwest street.'},
        {'name': 'Go to market',
          'description': 'make sure to pickup eggs!'},
        {'name': 'Relax',
          'description': 'Read the well-grounded rubyist.'}
      ];
      for (var i = 0; i < Tasks.length; i++)
        Tasks.insert(tasks[i]);
    }
  });
}

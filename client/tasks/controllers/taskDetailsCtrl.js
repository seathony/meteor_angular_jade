angular.module("simple-todos-angular").controller("TaskDetailsCtrl", ['$scope', '$stateParams',
 function($scope, $stateParams){
   $scope.taskId = $stateParams.taskId;
 }]);

angular.module('simple-todos-angular').controller('TasksListCtrl', ['$scope', '$meteor',
function ($scope, $meteor) {

$scope.tasks = $meteor.collection(Tasks);

$scope.remove = function(task){
  $scope.tasks.remove(task);
};

$scope.removeAll= function(){
  $scope.tasks.remove();
};

$scope.removeAll= function(){
  $scope.tasks.remove();
};

$scope.chckedIndexs=[];

$scope.checkedIndex = function (task) {
     if ($scope.chckedIndexs.indexOf(task) === -1) {
         $scope.chckedIndexs.push(task);
     }
     else {
         $scope.chckedIndexs.splice($scope.chckedIndexs.indexOf(task), 1);
     }
 }

 $scope.selectedTasks = function () {
     return $filter('filter')($scope.tasks, { checked: true });
 };
  $scope.removeChecked=function(index){
      angular.forEach($scope.chckedIndexs, function (value, index) {
          var index = $scope.tasks.indexOf(value);
          $scope.tasks.splice($scope.tasks.indexOf(value), 1);
      });
        $scope.chckedIndexs = [];
 };
}])

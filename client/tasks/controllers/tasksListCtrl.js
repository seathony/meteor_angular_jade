angular.module('simple-todos-angular').controller('TasksListCtrl', ['$scope', '$meteor', '$mdDialog',
function ($scope, $meteor, $mdDialog) {

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

 $scope.status = '  ';

 $scope.showConfirm = function(ev) {
  // Appending dialog to document.body to cover sidenav in docs app
  var confirm = $mdDialog.confirm()
        .title('Would you like to delete your debt?')
        .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Please do it!')
        .cancel('Sounds like a scam');
  $mdDialog.show(confirm).then(function() {
    $scope.status = 'You decided to get rid of your debt.';
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  });
};
}])

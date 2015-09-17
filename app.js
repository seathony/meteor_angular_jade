Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
  angular.module('simple-todos-angular', ['angular-meteor']);

  angular.module('simple-todos-angular').controller('PartiesListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

    $scope.parties = $meteor.collection(Parties, false);

    $scope.remove = function(party){
      $scope.parties.remove(party);
    };

  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {
      var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Fast just got faster with Nexus S.'},
        {'name': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];
      for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);
    }
  });
}

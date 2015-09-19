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

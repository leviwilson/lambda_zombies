var Zombie = Zombie || {};
Zombie.Controllers = Zombie.Controllers || {};

Zombie.Controllers.MainController = function($scope, $http, $timeout) {
  var talkingUrl = BASE_URL + 'zombie/talking',
      findTalkers = function() {
        $http.get(talkingUrl)
          .success(function(data) {
            console.log(data);
            $scope.othersTalking = data;
          })
          .error(function() {
            console.log(arguments);
          });

        //$timeout(findTalkers, 1000);
      },
      lastNotified = _.now();

  findTalkers();

  $scope.setTalking = function() {
    if((_.now() - lastNotified) > 1000) {
      $http.post(talkingUrl, {name: $scope.name})
        .error(function() {
          console.log(arguments);
        });

      lastNotified = _.now();
    }
  };
};

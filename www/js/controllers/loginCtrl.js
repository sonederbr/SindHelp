angular.module('starter').controller('loginCtrl', function($scope, $state, $ionicPopup, config, authService) {
  $scope.data = {};
  $scope.login = function(data) {
    authService.login(data.username, data.password).then(function(authenticated) {
      $state.go('main.dash', {}, { reload: true });
      //$scope.setCurrentUsername(data.username);
    }, function(err) {
      $ionicPopup.alert({
        title: config.msgLoginFalhaTitulo,
        template: config.msgLoginFalha
      });
    });
  };
})
angular.module('starter')

.controller('appCtrl', function($scope, $state, $ionicPopup, authService, AUTH_EVENTS, config) {
  $scope.username = authService.username();

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    $ionicPopup.alert({
      title: config.msgSemAutorizacaoTitulo,
      template: config.msgSemAutorizacao
    });
  });

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    authService.logout();
    $state.go('login');
    $ionicPopup.alert({
      title: config.msgSessaoPerdidaTitulo,
      template: config.msgSessaoPerdida
    });
  });

  $scope.setCurrentUsername = function(name) {
    $scope.username =  name;
  };
});
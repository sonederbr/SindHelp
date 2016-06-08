angular.module('starter').controller('dashCtrl', function($scope, $state, authService) {
  $scope.username = authService.username();
  $scope.logout = function() {
    authService.logout();
    $state.go('login');
  };
  $scope.account = function(){
    $state.go('main.account');
  }
});

angular.module('starter').controller('chamadoCtrl', function($scope, $ionicModal, $stateParams, chamadoApi) {
  $scope.$on('$ionicView.enter', function(e) {
    chamadoApi.getChamados().then(function (results) {
        $scope.chamados = results.data;
      }, function (error) {
          console.log(error);
      });
  });
   
  $scope.remove = function(chamado) {
    chamadoApi.remove(chamado);
  };
    
  $ionicModal.fromTemplateUrl('templates/chamado/chamado-criar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.createContact = function(u) {        
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };
})
.controller('chamadoDetalheCtrl', function($scope, $stateParams, chamadoApi){
  $scope.$on('$ionicView.enter', function(e) {
    chamadoApi.getChamado($stateParams.chamadoId).then(function (results) {
      $scope.chamado = results;
    }, function (error) {
        console.log(error);
    });
  });
});

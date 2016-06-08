angular.module('starter').controller('ordersCtrl', function ($scope, $ionicPopup, ordersAPI) {
    $scope.orders = [];
    $scope.obterOrders = function(){
        ordersAPI.getOrders().then(function (results) {
            $scope.orders = results.data;
              $ionicPopup.alert({
              title: "Sucesso!",
              template: results.data
            });
        }, function (error) {
            $ionicPopup.alert({ title: "Erro!", template: error });
        })    
    };
    
    $scope.obterUserInfo = function(){
        ordersAPI.obterUserInfo().then(function (results) {
            $scope.orders = results.data;
            $ionicPopup.alert({
              title: "Sucesso!",
              template: results.data.Email + " - " + results.data.HasRegistered + " - " + results.data.LoginProvider
            });
        }, function (error) {
            $ionicPopup.alert({ title: "Erro!", template: error });
        })    
    };
    
     $scope.obterChamados = function(){
        ordersAPI.obterChamados().then(function (results) {
            $scope.orders = results.data;
            $ionicPopup.alert({
              title: "Sucesso!",
              template: results
            });
        }, function (error) {
            $ionicPopup.alert({ title: "Erro!", template: error });
        })    
    };
});
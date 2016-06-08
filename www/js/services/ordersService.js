angular.module('starter').factory('ordersAPI', function ($http, config) {    
    var _getOrders = function () {
 
        return $http.get(config.baseUrl + 'api/Values').then(function (results) {
            return results;
        });
    };
    
    var _obterUserInfo = function(){
        return $http.get(config.baseUrl + 'Api/Account/UserInfo').then(function (results) {
            return results;
        });
    };


    var _obterChamados = function(){
        return $http.get(config.baseUrl + 'Api/Chamado').then(function (results) {
            return results;
        });
    };  
    return {
      obterUserInfo: _obterUserInfo,
      getOrders: _getOrders,
      obterChamados: _obterChamados
    };
});